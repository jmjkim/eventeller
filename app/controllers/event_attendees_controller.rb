class EventAttendeesController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity

    def index
        @event_attendees = EventAttendee.all
        render json: @event_attendees
    end

    def create
        @event_attendees = Event.find(params[:event_id]).event_attendees
        @check_attendee = @event_attendees.select {|attendee| attendee.attendee_id === params[:attendee_id]} 

        if @check_attendee.empty?
            @event_attendee = EventAttendee.create!(event_attendee_params)
            render json: @event_attendee, status: :created
        else
            render json: { error: "You are already attending this event!" }
        end
    end

    def destroy 
        @event_attendee = EventAttendee.find_by(attendee_id: params[:id])
        @event_attendee.destroy
        head :no_content
    end


    private
    def render_unprocessable_entity(invalid)
        render json: { error: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end

    def event_attendee_params
        params.permit(:id, :attendee_id, :event_id)
    end
end
