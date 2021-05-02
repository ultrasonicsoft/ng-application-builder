import { NodeConfiguration } from "../models/node-configuration.model";
import { Commands, Tokens } from "../models/commands.model";

export class NgModuleBuilder {
    static buildCommand(nodeName: string, node: NodeConfiguration, withRoute: boolean = true): string {
        let command = '';
        if (withRoute) {
            command = Commands.CreateModuleWithRoute
                .replace(Tokens.NodeName, nodeName)
                .replace(Tokens.RouteName, node.route)
                .replace(Tokens.ParentModuleName, node.parentModule);
                console.log(command);
                
        }
        else {
            command = Commands.CreateModule
                .replace(Tokens.NodeName, nodeName)
                .replace(Tokens.ParentModuleName, node.parentModule);
        }

        return command;
    }
}