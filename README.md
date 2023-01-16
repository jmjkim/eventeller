# Eventeller
Eventeller is a full-stack web application for my software engineering final project at Flatiron School using **React**, **Rails**, **Active Record**, **Postgres**.

[View app demonstration](https://dev.to/jmjkim/fis-phase-5-final-project-demonstration-eventeller-3o5f)

## Description
###### Model Association:
Please refer to Jack Kim Capstone Project Proposal.pdf for more details<br/>

- Models have Many to Many associations
- Multiple Validations are implemented on each model for proper data handling in the database (ex: uniqueness for username, phone number, email address)
- Password protection (has_secure_password) and User Authentication implemented for user account
- Implemented UseContext for global state variable

### Setup
Run the following commands to install gems and launch the app.

```
bundle install
npm install --prefix client

rails db:create db:migrate db:seed

rails s
npm start --prefix client
```

### Features
After signed in, users can:
Either host an event by creating one or attend events that are currently happening.

- For event hosts, they can view attendees/edit/cancel event
- For event attendees, they can choose any event they want to attend, cancel attendance and leave a feedback for the attending events.


## References
1. Resources from Flatiron School Software Engineering Course
2. Publicly available articles, lectures, videos from the Internet
3. [The Odin Project Model Association](https://www.theodinproject.com/lessons/ruby-on-rails-active-record-associations)

## License
- [MIT](https://choosealicense.com/licenses/mit/)
- [Sign in Calendar image](https://media.istockphoto.com/id/1366026792/photo/calendar-page-with-red-pen-close-up-focus-on-number-15-in-calendar-and-empty-red-circle-for.jpg?)
- [Landing page image 1](https://spotme.com/blog/virtual-event-planner/)
- [Landing page image 2](https://thumbs.dreamstime.com/b/friends-gathering-together-weekend-vector-buddies-sitting-couch-cafe-drinking-coffee-people-spend-time-playing-guitar-156466925.jpg)

## Contact
[My Linkedin](https://www.linkedin.com/in/jmjkim/)
