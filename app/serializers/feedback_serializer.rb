class FeedbackSerializer < ActiveModel::Serializer
  attributes :id, :attendee_id, :event_id, :feedback_input

  belongs_to :event
  belongs_to :attendee, class_name: "User"
end
