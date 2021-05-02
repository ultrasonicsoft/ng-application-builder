import { NodeConfiguration } from "./node-configuration.model";

export class AppConfiguration {
    name: string = '';
    nodeConfiguration: NodeConfiguration;

    constructor() {
        this.nodeConfiguration = new NodeConfiguration();
    }
}