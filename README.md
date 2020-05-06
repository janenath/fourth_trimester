# Fourth Trimester

## Fourth Trimester is a full-stack React, React-Redux, Ruby on Rails, and PostgreSQL application with JWT authentication
### The first twelve week period after a new baby is born often called the [Fourth Trimester](https://www.health.harvard.edu/blog/the-fourth-trimester-what-you-should-know-2019071617314). 
The Fourth Trimester is a time of profound physical, emotional, and psychological transformation for parents and newborns alike. New mothers are particularly vulnerable during this time, and may be affected by a variety of challenges including postpartum mood disorders like depression or anxiety, sleep deprivation, physical discomfort, and feelings of isolation. The goal of the Fourth Trimester app is to provide resources for new parents such as informative articles for each week of this critical time period as well as validated mental health screenings.


## Technologies Used
- Ruby on Rails
- PostgreSQL
- Authentication: JSON Web Tokens (jwt), bcrypt, simple_command
- React (create-react-app)
- React Router
- Axios
- React-Redux, redux-thunk
- Sass
- Heroku



## My Process
Fourth Trimester was built in approximately three weeks as a final project for General Assembly's Software Engineering Immersive Remote program.

#### Wireframes
Created with Adobe XD
![wireframe](https://github.com/janenath/fourth_trimester/blob/master/Screen%20Shot%202020-02-15%20at%208.11.39%20AM.png)

#### User Stories
- The user should be able to log in/out of their unique account
- The user should be able to read articles tailored to each week of the postpartum experience
- The user should be able to screen themselves for postpartum mood disorders, and be prompted with appropriate resources if they screen positively
- The user should be able to access a simple animated breathing exercise

#### Backend
- Generated Ruby on Rails backend
- Created PostgreSQL database, populated with seed data for articles and a test user
- Created authentication in backend with JSON web tokens, bcrypt, and simple_command
- Deployed with Heroku

#### Frontend
- Generated frontend with create-react-app
- Created Redux actions, reducers, and store
- Created router, components, conditional rendering for login/log out
- Integrated Typeform for Edinburgh Postpartum Depression Screening
- Styled app with Sass
- Deployed with Heroku



## Challenges/Future Goals
#### Top Priority Goals:
- Mobile responsiveness
- Improve cross-browser compatibility: Safari currently rendering some fonts incorrectly
- Potentially change frontend deployment to Netlify 

#### Medium Priority Goals:
- Write all content
- Consider implementing Contentful (headless CMS) for content management
- Allow users to create new accounts
- Render article recommendation depending on how far postpartum the current user is
- Prompt user to complete mental health screening at recommended intervals postpartum
- Create custom mental health screening component rather than integrating Typeform iframe

#### Later Goals:
- Create mobile app -- this would be a much more accessible resource for new parents
- Add in additional screenings such as screening for medical issues that may arise postpartum
- Ability for user to further customize their account/content recommendations, e.g. if they had a Cesarean section, if they are an adoptive parent, etc.
- Ability for user who is currently pregnant to create their own custom plan for postpartum period which will customize their  recommendations for the postpartum period (i.e. a user could indicate that going outside for a walk is an effective self-care strategy for them, so Fourth Trimester would remind user to try going on a walk at certain intervals)
