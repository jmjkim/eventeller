class UserSerializer < ActiveModel::Serializer
  attributes :id, :coordinator_id, :attendee_id, :username, :password_digest, :first_name, :last_name, :phone, :email

  has_many :event_attendees, foreign_key: :attendee_id
  has_many :events, through: :event_attendees

  has_one :event, foreign_key: :coordinator_id, class_name: "Event"
end
