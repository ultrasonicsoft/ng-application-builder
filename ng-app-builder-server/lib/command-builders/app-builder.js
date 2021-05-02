"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var path_1 = __importDefault(require("path"));
var child_process_1 = require("child_process");
var app_configuration_model_1 = require("../models/app-configuration.model");
var commands_model_1 = require("../models/commands.model");
var ng_command_builder_1 = require("./ng-command-builder");
var node_configuration_model_1 = require("../models/node-configuration.model");
var ng_module_builder_1 = require("./ng-module-builder");
var ng_component_builder_1 = require("./ng-component-builder");
var ng_service_builder_1 = require("./ng-service-builder");
var ng_pipe_builder_1 = require("./ng-pipe-builder");
var AppBuilder = /** @class */ (function () {
    function AppBuilder() {
        this.pwd = '';
        this.configuration = new app_configuration_model_1.AppConfiguration();
        this.commandBuilder = new ng_command_builder_1.NgCommandBuilder();
    }
    AppBuilder.prototype.generateProject = function (_configuration, projctModel) {
        var isSuccessful = true;
        this.configuration = _configuration;
        try {
            this.createApp();
            this.commandBuilder.append("cd " + this.configuration.name);
            this.generateApp(this.configuration.nodeConfiguration);
            this.commandBuilder.append('cd ..');
            var completeCommand = this.commandBuilder.getCommand();
            console.log(completeCommand);
            child_process_1.execSync(completeCommand);
            var files = [];
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
    };
    AppBuilder.prototype.createApp = function () {
        var command = commands_model_1.Commands.CreateApp.replace(commands_model_1.Tokens.AppName, this.configuration.name);
        this.commandBuilder.append(command);
    };
    AppBuilder.prototype.generateApp = function (parentNode) {
        var _this = this;
        parentNode.children.forEach(function (currentNode) {
            var command = '';
            var nodeName = '';
            if (currentNode.modulePath) {
                // nodeName = currentNode.modulePath + '/' + currentNode.name;
                nodeName = currentNode.modulePath;
            }
            else {
                nodeName = currentNode.name;
            }
            switch (currentNode.type) {
                case node_configuration_model_1.NodeType.module:
                    command = ng_module_builder_1.NgModuleBuilder.buildCommand(nodeName, currentNode, false);
                    break;
                case node_configuration_model_1.NodeType.moduleWithRoute:
                    command = ng_module_builder_1.NgModuleBuilder.buildCommand(nodeName, currentNode);
                    break;
                case node_configuration_model_1.NodeType.component:
                    command = ng_component_builder_1.NgComponentBuilder.buildCommand(nodeName, currentNode);
                    break;
                case node_configuration_model_1.NodeType.service:
                    command = ng_service_builder_1.NgServiceBuilder.buildCommand(nodeName);
                    break;
                case node_configuration_model_1.NodeType.pipe:
                    command = ng_pipe_builder_1.NgPipeBuilder.buildCommand(nodeName, currentNode);
                    break;
                default:
                    break;
            }
            if (command) {
                _this.commandBuilder.append(command);
            }
            if (currentNode.children) {
                _this.generateApp(currentNode);
            }
        });
    };
    AppBuilder.prototype.getProjectStructure = function (projectName, dirPath, arrayOfFiles, projctModel) {
        var _this = this;
        var files = fs_1.default.readdirSync(dirPath);
        arrayOfFiles = arrayOfFiles || [];
        files.forEach(function (file) {
            if (fs_1.default.statSync(dirPath + "/" + file).isDirectory()) {
                arrayOfFiles = _this.getProjectStructure(projectName, dirPath + "/" + file, arrayOfFiles, projctModel);
            }
            else {
                var filePath = path_1.default.join(__dirname, dirPath, "/", file);
                arrayOfFiles.push(filePath);
                var fileName = path_1.default.join(dirPath, "/", file);
                var fileNameKey = fileName.replace(projectName + '/', '');
                projctModel.files[fileNameKey] = fs_1.default.readFileSync(fileName, 'utf8');
                arrayOfFiles.push(path_1.default.join(dirPath.replace(projectName + '/', ''), "/", file));
            }
        });
        return arrayOfFiles;
    };
    return AppBuilder;
}());
exports.AppBuilder = AppBuilder;
