import { Commands, Tokens } from "../models/commands.model";
import { NodeConfiguration } from "../models/node-configuration.model";

export class NgPipeBuilder {
    static buildCommand(nodeName: string, node: NodeConfiguration): string {
        const command = Commands.CreatePipe
            .replace(Tokens.NodeName, nodeName)
            .replace(Tokens.ParentModuleName, node.parentModule);
        return command;
    }
}