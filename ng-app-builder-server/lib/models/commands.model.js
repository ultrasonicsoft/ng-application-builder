"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Tokens = /** @class */ (function () {
    function Tokens() {
    }
    Tokens.AppName = '$appName$';
    Tokens.NodeName = '$moduleName$';
    Tokens.RouteName = '$routeName$';
    Tokens.ParentModuleName = '$parentModuleName$';
    return Tokens;
}());
exports.Tokens = Tokens;
var Commands = /** @class */ (function () {
    function Commands() {
    }
    // static CreateApp = `ng new ${Tokens.AppName} --routing --defaults`
    Commands.CreateApp = "ng new " + Tokens.AppName + " --force --skip-install --routing --defaults";
    Commands.CreateModule = "ng generate module " + Tokens.NodeName + " --module " + Tokens.ParentModuleName + ".module ";
    Commands.CreateModuleWithRoute = "ng generate module " + Tokens.NodeName + " --route " + Tokens.RouteName + " --module " + Tokens.ParentModuleName + ".module ";
    Commands.CreateComponent = "ng generate component " + Tokens.NodeName + " --module " + Tokens.ParentModuleName + ".module ";
    Commands.CreatePipe = "ng generate pipe " + Tokens.NodeName + " --module " + Tokens.ParentModuleName + ".module ";
    Commands.CreateService = "ng generate service " + Tokens.NodeName;
    return Commands;
}());
exports.Commands = Commands;
