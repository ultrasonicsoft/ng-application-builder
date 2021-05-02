import { NodeConfiguration } from "../models/node-configuration.model";
import { Commands, Tokens } from "../models/commands.model";

export class NgServiceBuilder {
    static buildCommand(nodeName: string): string {
        const command = Commands.CreateService
            .replace(Tokens.NodeName, nodeName)
        return command;
    }
}