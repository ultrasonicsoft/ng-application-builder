import { NodeType } from './node-type.model';

export class DialogData {
    type = NodeType.moduleWithRoute;
    route: string;
    name: string;
    action: string;
}
