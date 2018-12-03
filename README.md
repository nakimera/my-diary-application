[![Build Status](https://travis-ci.org/nakimera/my-diary-application.svg?branch=develop)](https://travis-ci.org/nakimera/my-diary-application)
[![Maintainability](https://api.codeclimate.com/v1/badges/140e2cdf5000e339ab23/maintainability)](https://codeclimate.com/github/nakimera/my-diary-application/maintainability)
[![Coverage Status](https://coveralls.io/repos/github/nakimera/my-diary-application/badge.svg?branch=develop)](https://coveralls.io/github/nakimera/my-diary-application?branch=develop)

## My Diary Application
---
Diary is an online journal where users can pen down their thoughts and feelings.

### Getting started
---
#### Prerequisites
- [node js](https://nodejs.org/en/download/)
- [yarn](https://yarnpkg.com/lang/en/docs/install/#mac-stable) or [npm](https://www.npmjs.com/get-npm) package manager

#### Technologies used
- [React JS](https://reactjs.org/docs/getting-started.html)
- [Redux](https://redux.js.org/)

#### Setting up the application

Clone the application

`git clone https://github.com/nakimera/my-diary-application.git`

Install dependencies

`yarn install`

Run server

`yarn start`

This will direct you to the `index page` where you follow the signup link to create a user account then login

#### Features that can be tested

| Feature |How it can be tested |
|---------|---------|
|Login| Follow the login link|
|Signup| Follow the signup link on the landing page|
|Add diary entry|click the plus icon at the bottom of the home page|
|View all diary entries|Click `My diary` on the navigation bar|
|View details of a diary entry|Click on an entry on your entries list|

#### Running tests
`yarn test -- --coverage`

[Live application](https://my-diary-application.herokuapp.com/)