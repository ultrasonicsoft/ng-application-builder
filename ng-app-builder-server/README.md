# Angular Application builder - Server

This is a Node.js web server which generates an Angular application. The frontend requests an application by sending application skeleton in JSON format. The server parse the request and builds `Angular CLI` commands for generating application. Once application is generated then either a zip file can be sent to client for download or open an application in StackBlitz project.


## Setup

* Install Node.js latest and stable version of Node.js and Git
* Clone the GitHub repository

    `https://github.com/ultrasonicsoft/ng-application-builder.git`

* Install the required NPM package into source directory

    `npm install`
* Start the Node.js server. (Note: For production build, use [PM2](https://pm2.keymetrics.io/) or other package to run Node.js server for auto recovery.)

`npm run start`

* Server will be in listening mode for incoming requests.

## Security
The server accepts new project workflow is sent into a JSON request body which is then parsed into appropriate Angular CLI commands and gets runs on server machine. Thus it is important to Sanitise the command arguments for any command injections. This work item will be worked upon soon. If you wish to deploy server and open it to everyone on internet make sure you have addressed this point.