"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var commands_model_1 = require("../models/commands.model");
var NgPipeBuilder = /** @class */ (function () {
    function NgPipeBuilder() {
    }
    NgPipeBuilder.buildCommand = function (nodeName, node) {
        var command = commands_model_1.Commands.CreatePipe
            .replace(commands_model_1.Tokens.NodeName, nodeName)
            .replace(commands_model_1.Tokens.ParentModuleName, node.parentModule);
        return command;
    };
    return NgPipeBuilder;
}());
exports.NgPipeBuilder = NgPipeBuilder;
