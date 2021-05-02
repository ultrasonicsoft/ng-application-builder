"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NgCommandBuilder = /** @class */ (function () {
    function NgCommandBuilder() {
        this.allCommands = [];
    }
    NgCommandBuilder.prototype.append = function (_command) {
        this.allCommands.push(_command);
    };
    NgCommandBuilder.prototype.getCommand = function () {
        return this.allCommands.join(' && ');
    };
    NgCommandBuilder.prototype.reset = function () {
        this.allCommands = [];
    };
    return NgCommandBuilder;
}());
exports.NgCommandBuilder = NgCommandBuilder;
