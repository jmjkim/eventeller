class Feedback < ApplicationRecord
    belongs_to :event
    belongs_to :attendee, class_name: "User"

    validates :attendee_id, :event_id, :feedback_input, presence: true
    validates :feedback_input, length: { in: 1..200, message: "Cannot exceed 200 letters" }
end
