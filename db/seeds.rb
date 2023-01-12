# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "start seeding"

# User.create!([
#     {
#         coordinator_id: 1,
#         attendee_id: 1,
#         username: "imcoord1",
#         password: "abcd1234",
#         password_confirmation: "abcd1234",
#         password_digest: "abcd1234",
#         first_name: "john",
#         last_name: "doe",
#         phone: "920-201-6729",
#         email: "ohjohn55@abcd.com",
#     },

#     {
#         coordinator_id: nil,
#         attendee_id: 1,
#         username: "attendee1",
#         password: "abcd1234",
#         password_confirmation: "abcd1234",
#         password_digest: "abcd1234",
#         first_name: "zilean",
#         last_name: "tim",
#         phone: "104-561-1249",
#         email: "zitim11@abcd.com",
#     },

#     {
#         coordinator_id: nil,
#         attendee_id: 2,
#         username: "attendee2",
#         password: "abcd1234",
#         password_confirmation: "abcd1234",
#         password_digest: "abcd1234",
#         first_name: "aram",
#         last_name: "god",
#         phone: "394-105-7622",
#         email: "truckerlife@abcd.com",
#     }
# ])

# Event.create!([
#     {
#         coordinator_id: 1,
#         event_code: rand.to_s[2..6],
#         name: "new employees orientation",
#         start_date: "12/20/22",
#         end_date: "12/20/22",
#         start_time: "2:00PM",
#         end_time: "2:45PM",
#         street: "123 abc ln",
#         city: "lemon",
#         state: "ca",
#         zipcode: "98170",
#         description: "new employees must attend this orientation",
#     },
# ])

# EventAttendee.create!([
#     {
#         attendee_id: 1,
#         event_id: 1,
#     },

#     {
#         attendee_id: 2,
#         event_id: 1,
#     },
# ])

# Subevent.create!([
#     {
#         event_id: 1,
#         coordinator_id: 1,
#         name: "coffe break",
#         description: "15 minutes coffee break",
#         start_time: "2:15PM",
#         end_time: "2:30PM",
#     }
# ])


puts "seeding completed"