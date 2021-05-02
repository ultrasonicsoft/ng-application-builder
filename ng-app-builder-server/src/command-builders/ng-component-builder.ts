import { NodeConfiguration } from "../models/node-configuration.model";
import { Commands, Tokens } from "../models/commands.model";

export class NgComponentBuilder {
    static buildCommand(nodeName: string, node: NodeConfiguration): string {
        const command = Commands.CreateComponent
            .replace(Tokens.NodeName, nodeName)
            .replace(Tokens.ParentModuleName, node.parentModule);
        return command;
    }
}