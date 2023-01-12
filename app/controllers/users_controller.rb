class UsersController < ApplicationController
    skip_before_action :authorize, only: [:create]
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity

    def create
        @user = User.create!(user_params)

        @user.update(coordinator_id: @user.id)
        @user.update(attendee_id: @user.id)

        render json: @user, status: :created
    end

    def show
        @user = User.find_by(id: session[:user_id])

        if @user
            render json: @user
        else
            render json: { error: "Unauthorized" }, status: :unauthorized
        end
    end

    
    private
    def render_unprocessable_entity(invalid)
        render json: { error: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end
    
    def user_params
        params.permit(:id, :coordinator_id, :attendee_id, :username, :password, :password_confirmation, :first_name, :last_name, :phone, :email)
    end
end
