class FeedbacksController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity

    def index
        @feedbacks = Feedback.all
        render json: @feedbacks
    end

    def create
        @feedbacks = Event.find(params[:event_id]).feedbacks
        @check_feedback = @feedbacks.select {|feedback| feedback.attendee_id === params[:attendee_id]} 

        if @check_feedback.empty? 
            @feedback = Feedback.create!(feedback_params)
            render json: @feedback, status: :created
        else
            render json: { error: "You already left a feedback!" }
        end
    end


    private
    def render_unprocessable_entity(invalid)
        render json: { error: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end

    def feedback_params
        params.permit(:id, :attendee_id, :event_id, :feedback_input)
    end
end
