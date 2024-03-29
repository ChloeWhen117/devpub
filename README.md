# devpub
Social media web application, server and deployment code

## Introduction

The web app is built on facebook incubator's [create-react-app](https://github.com/facebookincubator/create-react-app) and is kept up-to-date with their monthly-ish [releases](https://github.com/facebookincubator/create-react-app/releases).

## Dev environment
This project is expected to work on macOS/Linux/Windows on node's LTS release (6.X.Y) and latest npm.

    npm i -g npm             # update npm
    npm i                    # install server
    npm run client-install   # install client
    npm run dev              # run dev environment

## App structure

Server lives in the main directory. Client lives in '/client'. Server and client have separate build steps.

## Authentication

[Passport](http://www.passportjs.org/packages/passport-jwt/) Strategy for JWT Authentication

## Testing

Tests use create-react-app's default framework [jest](https://facebook.github.io/jest/).

There's not many tests at the moment. Only smoke tests have been implemented. But here's the general plan: 

1. Smoke tests for each component that just render that component.
2. Unit tests for components that get used heavily.
3. Integration tests that can run on deploys.

## Dependencies

### Redux Developer Tools

[Redux Developer Tools](https://github.com/zalmoxisus/redux-devtools-extension) for your preferred browser is required to build the project. 

### MLab Key
In order for the development build to work, you must do the following: 

1. Create a free account at [MLab](https://mlab.com/) and obtain your mLab key
![Mlab Key](mlabkey.png?raw=true "MLAB KEY")

2. Create a development build keys file 'keys_dev.js' in '/config' with the follow code:

```
module.exports = {
  mongoURI:
  'mlab key here',
  secretOrKey: 'secret'
};

```
3. Replace 'mlab key here' with your account's mlab key. 
