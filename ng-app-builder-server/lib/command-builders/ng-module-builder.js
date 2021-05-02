"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var commands_model_1 = require("../models/commands.model");
var NgModuleBuilder = /** @class */ (function () {
    function NgModuleBuilder() {
    }
    NgModuleBuilder.buildCommand = function (nodeName, node, withRoute) {
        if (withRoute === void 0) { withRoute = true; }
        var command = '';
        if (withRoute) {
            command = commands_model_1.Commands.CreateModuleWithRoute
                .replace(commands_model_1.Tokens.NodeName, nodeName)
                .replace(commands_model_1.Tokens.RouteName, node.route)
                .replace(commands_model_1.Tokens.ParentModuleName, node.parentModule);
            console.log(command);
        }
        else {
            command = commands_model_1.Commands.CreateModule
                .replace(commands_model_1.Tokens.NodeName, nodeName)
                .replace(commands_model_1.Tokens.ParentModuleName, node.parentModule);
        }
        return command;
    };
    return NgModuleBuilder;
}());
exports.NgModuleBuilder = NgModuleBuilder;
