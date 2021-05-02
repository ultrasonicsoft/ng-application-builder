"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NodeType;
(function (NodeType) {
    NodeType["module"] = "module";
    NodeType["moduleWithRoute"] = "moduleWithRoute";
    NodeType["component"] = "component";
    NodeType["service"] = "service";
    NodeType["pipe"] = "pipe";
    NodeType["directive"] = "directive";
})(NodeType = exports.NodeType || (exports.NodeType = {}));
var NodeConfiguration = /** @class */ (function () {
    function NodeConfiguration() {
        this.name = '';
        this.type = NodeType.module;
        this.isRoot = false;
        this.route = '';
        this.modulePath = '';
        this.parentModule = '';
        this.children = [];
    }
    return NodeConfiguration;
}());
exports.NodeConfiguration = NodeConfiguration;
