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

[Redux Developer Tools](https://github.com/zalmoxisus/redux-devtools-extension) for your preferred browser is required to build the project. 

## App structure

Server lives in the main directory. Client lives in '/client'. Server and client have separate build steps.

## Authentication

[Passport](http://www.passportjs.org/packages/passport-jwt/) Strategy for JWT Authentication

