class EventAttendeeSerializer < ActiveModel::Serializer
  attributes :id, :attendee_id, :event_id

  belongs_to :attendee, class_name: "User"
  belongs_to :event
end
