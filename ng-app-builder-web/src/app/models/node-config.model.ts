import { NodeType } from './node-type.model';
export class NodeConfiguration {
    name = '';
    type: NodeType = NodeType.module;
    route = '';
    modulePath = '';
    parentModule = '';
    children: Array<NodeConfiguration> = [];
}
