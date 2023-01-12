class EventAttendee < ApplicationRecord
    belongs_to :attendee, primary_key: "attendee_id", class_name: "User"
    belongs_to :event
end
