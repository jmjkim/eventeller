class EventsController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity

    def index
        @events = Event.all.order(created_at: :desc)
        render json: @events
    end

    def show
        @event = Event.find_by(id: params[:id])

        if @event
            render json: @event
        else
            render json: { error: "Event not found" }
        end
    end

    def create
        @event = Event.create!(event_params)
        render json: @event, status: :created
    end

    def update
        @event = Event.find(params[:id])

        if @event
            @event.update!(event_params)
            render json: @event
        else
            render json: { error: "Event not found" }, stats: :not_found
        end
    end

    def destroy
        @event = Event.find(params[:id])
        @event.destroy
        head :no_content
    end


    private
    def render_unprocessable_entity(invalid)
        render json: { error: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end

    def event_params
        params.permit(:id, :coordinator_id, :name, :start_date, :end_date, :start_time, :end_time, :street, :city, :state, :zipcode, :description)
    end
end
