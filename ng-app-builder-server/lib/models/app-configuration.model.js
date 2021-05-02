"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var node_configuration_model_1 = require("./node-configuration.model");
var AppConfiguration = /** @class */ (function () {
    function AppConfiguration() {
        this.name = '';
        this.nodeConfiguration = new node_configuration_model_1.NodeConfiguration();
    }
    return AppConfiguration;
}());
exports.AppConfiguration = AppConfiguration;
