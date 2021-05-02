import { MockConfig } from "./mock.config";
import { AppBuilder } from "./command-builders/app-builder";
import { ProjectModel } from "./models/project.model";

import express from "express";
import path from "path";
import cors from "cors"
import zip from "zip-a-folder"
import fs from "fs";
import { execSync } from "child_process";

// const { zip } = require('zip-a-folder');

const app = express();
const port = 8080; // default port to listen

app.use(express.json());
app.use(cors());

const builder = new AppBuilder();
// builder.run(MockConfig);

// Configure Express to use EJS
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.static('public'));

// define a route handler for the default home page
app.get("*", (req: any, res: any) => {
  // render the index template
  console.log('sending website...');
  res.sendfile('./public/index.html');
});

app.post(`/generate-app`, async (req: any, res) => {
  try {
    console.log('******* Generating new project:', req.body.name);

    const folderPath = path.resolve(__dirname, '..') + '/' + req.body.name;

    console.log(folderPath);
    console.log('removing folder...', folderPath);
    execSync('rm -rf ' + folderPath);

    let projctModel = new ProjectModel();
    projctModel.title = req.body.name;
    projctModel.description = 'Angular generator project';
    projctModel.template = 'angular-cli';
    projctModel.tags = ['stackblitz', 'sdk'];

    const result = builder.generateProject(req.body, projctModel);
    if (!result) {
      throw new Error('Invalid request...');
    }
    const zipFileName = req.body.name + '.zip';
    await zip.zip(req.body.name, zipFileName);
    console.log(zipFileName);

    return res.send(projctModel);
    // return res.sendFile(zipFileName, { root: './' }, function (err) {
    //     if (err) {
    //         console.error(err);
    //     } else {
    //         console.log('Sent:', zipFileName);
    //         fs.unlinkSync(zipFileName);
    //     }
    // });

  } catch (err) {
    // tslint:disable-next-line:no-console
    console.error(err);
    res.status(400).send({ error: err.message || err });
  }
});

app.post(`/download-app`, async (req: any, res) => {
  try {
    console.log('******* Generating new project:', req.body.name);

    const folderPath = path.resolve(__dirname, '..') + '/' + req.body.name;

    console.log(folderPath);
    console.log('removing folder...', folderPath);
    execSync('rm -rf ' + folderPath);

    const result = builder.generateProject(req.body);
    if (!result) {
      throw new Error('Invalid request...');
    }
    const zipFileName = req.body.name + '.zip';
    await zip.zip(req.body.name, zipFileName);
    console.log(zipFileName);

    return res.sendFile(zipFileName, { root: './' }, function (err) {
      if (err) {
        console.error(err);
      } else {
        console.log('Sent:', zipFileName);
        fs.unlinkSync(zipFileName);
      }
    });

  } catch (err) {
    // tslint:disable-next-line:no-console
    console.error(err);
    res.json({ error: err.message || err });
  }
});

// start the express server
app.listen(port, () => {
  // tslint:disable-next-line:no-console
  console.log(`server started at http://localhost:${port}`);
});
