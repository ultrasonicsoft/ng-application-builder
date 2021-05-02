import { NodeConfiguration } from './node-config.model';

export class AppConfiguration {
    name = '';
    nodeConfiguration: NodeConfiguration;

    constructor() {
        this.nodeConfiguration = new NodeConfiguration();
    }
}
