# devpub
Social media web application, server and deployment code

## Introduction

The web app is built on facebook incubator's [create-react-app](https://github.com/facebookincubator/create-react-app) and is kept up-to-date with their monthly-ish [releases](https://github.com/facebookincubator/create-react-app/releases).

## Dev environment
This project is expected to work on macOS/Linux/Windows on node's LTS release (6.X.Y) and latest npm.

    npm i -g npm # update npm
    npm i # install server
    cd client
    npm i # install client
    cd . #navigate back to server directory
    npm run dev # run dev environment
   
## App structure

Server lives in the main directory. Client lives in '/client'. Server and client have separate build steps.

## Authentication

[Passport](http://www.passportjs.org/) Strategy for JWT Authentication

