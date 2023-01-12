class EventSerializer < ActiveModel::Serializer
  attributes :id, :coordinator_id, :coordinator, :name, :start_date, :end_date, :start_time, :end_time, :street, :city, :state, :zipcode, :description, :attendees

  has_many :attendees, through: :event_attendees, source: :attendee
  has_many :event_attendees, foreign_key: :event_id
  has_many :feedbacks

  belongs_to :coordinator, class_name: "User"
end
