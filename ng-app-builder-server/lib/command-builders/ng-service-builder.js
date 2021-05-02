"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var commands_model_1 = require("../models/commands.model");
var NgServiceBuilder = /** @class */ (function () {
    function NgServiceBuilder() {
    }
    NgServiceBuilder.buildCommand = function (nodeName) {
        var command = commands_model_1.Commands.CreateService
            .replace(commands_model_1.Tokens.NodeName, nodeName);
        return command;
    };
    return NgServiceBuilder;
}());
exports.NgServiceBuilder = NgServiceBuilder;
