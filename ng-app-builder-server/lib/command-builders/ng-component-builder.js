"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var commands_model_1 = require("../models/commands.model");
var NgComponentBuilder = /** @class */ (function () {
    function NgComponentBuilder() {
    }
    NgComponentBuilder.buildCommand = function (nodeName, node) {
        var command = commands_model_1.Commands.CreateComponent
            .replace(commands_model_1.Tokens.NodeName, nodeName)
            .replace(commands_model_1.Tokens.ParentModuleName, node.parentModule);
        return command;
    };
    return NgComponentBuilder;
}());
exports.NgComponentBuilder = NgComponentBuilder;
