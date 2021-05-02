export class Tokens {
    static AppName = '$appName$';
    static NodeName = '$moduleName$';
    static RouteName = '$routeName$';
    static ParentModuleName = '$parentModuleName$';
}

export class Commands {
    // static CreateApp = `ng new ${Tokens.AppName} --routing --defaults`
    static CreateApp = `ng new ${Tokens.AppName} --force --skip-install --routing --defaults`
    static CreateModule = `ng generate module ${Tokens.NodeName} --module ${Tokens.ParentModuleName}.module `
    static CreateModuleWithRoute = `ng generate module ${Tokens.NodeName} --route ${Tokens.RouteName} --module ${Tokens.ParentModuleName}.module `
    static CreateComponent = `ng generate component ${Tokens.NodeName} --module ${Tokens.ParentModuleName}.module `
    static CreatePipe = `ng generate pipe ${Tokens.NodeName} --module ${Tokens.ParentModuleName}.module `
    static CreateService = `ng generate service ${Tokens.NodeName}`
}