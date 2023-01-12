class Event < ApplicationRecord
    belongs_to :coordinator, class_name: "User"

    has_many :event_attendees, foreign_key: :event_id, dependent: :destroy
    has_many :attendees, through: :event_attendees
    has_many :feedbacks, dependent: :destroy
    
    validates :coordinator_id, :name, :start_date, :end_date, :start_time, :end_time, :street, :city, :state, :zipcode, :description, presence: true
    validate :event_date_cannot_be_in_the_past, on: [:create, :update]

    validates :coordinator_id, uniqueness: { message: "is already hosting an event" }
    validates :name, length: { in: 1..50 }, format: { with: /\A[0-9a-zA-Z ]+\z/, message: "must be letters or numbers" }
    validates :street, length: { in: 1..20 }, format: { with: /\A[0-9a-zA-Z ]+\z/, message: "must be letters or numbers" }
    validates :city, length: { in: 1..20 }, format: { with: /\A[a-zA-Z]+\z/, message: "must be letters" }
    validates :state, length: { is: 2 }, format: { with: /\A[a-zA-Z]+\z/, message: "must be letters" }
    validates :zipcode, length: { is: 5 }, format: { with: /\A[0-9]*\z/, message: "must be numbers" }
    validates :description, length: { in: 1..800, message: "cannot exceeds 800 lengths" }

    private
    def event_date_cannot_be_in_the_past
        if start_date < Date.today.to_s
            errors.add(:start_date, "cannot be in the past")

        elsif end_date < start_date
            errors.add(:end_date, "cannot be before start date")
        end
    end
end
