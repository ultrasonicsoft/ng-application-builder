import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NodeType } from 'src/app/models/node-type.model';
import { NodeConfiguration } from 'src/app/models/node-config.model';

@Component({
    selector: 'app-new-dialog',
    templateUrl: './new-dialog.component.html',
    styleUrls: ['./new-dialog.component.css']
})
export class NewDialogComponent implements OnInit {

    selected = NodeType.moduleWithRoute;
    selectedNode: NodeConfiguration = new NodeConfiguration();

    constructor(
        public dialogRef: MatDialogRef<NewDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public modalData: any) {

    }

    onNoClick(): void {
        this.dialogRef.close();
    }

    ngOnInit() {
        // console.log(this.modalData);
        if (this.modalData.action === 'update') {
            this.selectedNode = this.modalData.data;
            this.selected = this.modalData.data.type;
        }
    }

    onChange() {
        this.modalData.type = this.selected;
        this.selectedNode.type = this.selected;
        console.log(this.modalData);

        if (this.selected !== NodeType.moduleWithRoute) {
            this.modalData.route = '';
        }
    }

}
