import fs from "fs";
import path from "path";
import { execSync } from "child_process";

import { AppConfiguration } from "../models/app-configuration.model";
import { Commands, Tokens } from "../models/commands.model";
import { NgCommandBuilder } from "./ng-command-builder";
import { NodeConfiguration, NodeType } from "../models/node-configuration.model";
import { NgModuleBuilder } from "./ng-module-builder";
import { NgComponentBuilder } from "./ng-component-builder";
import { NgServiceBuilder } from "./ng-service-builder";
import { NgPipeBuilder } from "./ng-pipe-builder";
import { ProjectModel } from "../models/project.model";

export class AppBuilder {
  configuration: AppConfiguration;
  pwd: string = '';

  commandBuilder: NgCommandBuilder;

  constructor() {
    this.configuration = new AppConfiguration();
    this.commandBuilder = new NgCommandBuilder();
  }

  generateProject(_configuration: any, projctModel?: ProjectModel): boolean {
    let isSuccessful = true;
    this.configuration = _configuration as AppConfiguration;
    try {
      this.createApp();
      this.commandBuilder.append(`cd ${this.configuration.name}`);

      this.generateApp(this.configuration.nodeConfiguration);
      this.commandBuilder.append('cd ..');

      const completeCommand = this.commandBuilder.getCommand();
      console.log(completeCommand);

      execSync(completeCommand);

      let files: string[] = [];

      if (projctModel) {
        this.getProjectStructure(this.configuration.name, this.configuration.name, files, projctModel);
      }

    }
    catch (ex) {
      isSuccessful = false;
      console.error(ex);
    }
    finally {
      this.commandBuilder.reset();
    }
    return isSuccessful;
  }

  createApp() {
    const command = Commands.CreateApp.replace(Tokens.AppName, this.configuration.name);
    this.commandBuilder.append(command);
  }

  generateApp(parentNode: NodeConfiguration) {
    parentNode.children.forEach(currentNode => {
      let command = '';
      let nodeName = '';

      if (currentNode.modulePath) {
        // nodeName = currentNode.modulePath + '/' + currentNode.name;
        nodeName = currentNode.modulePath;
      }
      else {
        nodeName = currentNode.name;
      }

      switch (currentNode.type) {
        case NodeType.module:
          command = NgModuleBuilder.buildCommand(nodeName, currentNode, false);
          break;
        case NodeType.moduleWithRoute:
          command = NgModuleBuilder.buildCommand(nodeName, currentNode);
          break;
        case NodeType.component:
          command = NgComponentBuilder.buildCommand(nodeName, currentNode);
          break;
        case NodeType.service:
          command = NgServiceBuilder.buildCommand(nodeName);
          break;
        case NodeType.pipe:
          command = NgPipeBuilder.buildCommand(nodeName, currentNode);
          break;
        default:
          break;
      }

      if (command) {
        this.commandBuilder.append(command)
      }

      if (currentNode.children) {
        this.generateApp(currentNode);
      }
    });
  }

  getProjectStructure(projectName: string, dirPath: string, arrayOfFiles: string[], projctModel: ProjectModel) {
    let files = fs.readdirSync(dirPath)

    arrayOfFiles = arrayOfFiles || []

    files.forEach((file) => {
      if (fs.statSync(dirPath + "/" + file).isDirectory()) {
        arrayOfFiles = this.getProjectStructure(projectName, dirPath + "/" + file, arrayOfFiles, projctModel)
      } else {
        const filePath = path.join(__dirname, dirPath, "/", file);
        arrayOfFiles.push(filePath);
        const fileName = path.join(dirPath, "/", file);
        const fileNameKey = fileName.replace(projectName + '/', '');
        projctModel.files[fileNameKey] = fs.readFileSync(fileName, 'utf8');
        arrayOfFiles.push(path.join(dirPath.replace(projectName + '/', ''), "/", file))
      }
    })

    return arrayOfFiles
  }
}