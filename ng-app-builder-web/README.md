# # Angular Application builder - Web

This Angular application generates new Angular applications. The frontend requests an application by sending application skeleton in JSON format. The server parse the request and builds `Angular CLI` commands for generating application. Once application is generated then either a zip file can be sent to client for download or open an application in StackBlitz project.


## Development server

* Install Node.js, Git, Angular CLI packages.
* Clone the GitHub repository

    `https://github.com/ultrasonicsoft/ng-application-builder.git`

* Install npm package in source directory

    `npm install` 
* Make sure [Server](https://github.com/ultrasonicsoft/ng-application-builder.git) is setup and running.

* Update `baseUrl` in `environment.ts` file with valid server IP address/URL. For local server, default value is `localhost`.

* Run `ng serve --open` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

* Define the new project workflow in the browser. Once finished,  generate and download the new project.
* Unzip the downloaded project and run `npm install` command in the source directory.
* Run the application by running `ng serve` command. 


## Production Build

* Run `ng build --prod` to build the project for a production server. 
* Deploy the web application by copying `dist` folder to your web server.
