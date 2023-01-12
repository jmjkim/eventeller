class User < ApplicationRecord
    has_secure_password

    has_many :event_attendees, foreign_key: :attendee_id, dependent: :destroy
    has_many :events, through: :event_attendees,  dependent: :destroy
    has_one :event, foreign_key: :coordinator_id, class_name: "Event",  dependent: :destroy

    validates :username, :password, :first_name, :last_name, :phone, :email, :password_confirmation, presence: true
    validates :username, :phone, :email, uniqueness: true
    validates :username, length: { in: 8..12, message: "must be between 8-12 lengths" }, format: { with: /\A(?=.*?\d)(?=.*?[a-zA-Z])[a-zA-Z\d]+\Z/, message: "must include letters and numbers with no space" }
    validates :phone, format: { with: /\A[0-9]*\Z/, message: "Number must be numbers only" }
    validates :email, length: { in: 1..30, message: "email is too long" }, format: { with: /\A[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+\Z/, message: "invalid format" }
    validates :password_confirmation, confirmation: true, length: { in: 8..12, message: "must be between 8-12 lengths" }, format: { with: /\A(?=.*?\d)(?=.*?[a-zA-Z])[a-zA-Z\d]+\Z/, message: "must be letters and numbers with no space" }
end
