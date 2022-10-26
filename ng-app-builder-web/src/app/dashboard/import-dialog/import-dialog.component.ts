import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NodeType } from 'src/app/models/node-type.model';
import { NodeConfiguration } from 'src/app/models/node-config.model';

@Component({
    selector: 'app-import-dialog',
    templateUrl: './import-dialog.component.html',
    styleUrls: ['./import-dialog.component.css']
})
export class ImportDialogComponent {

    sourceData: string;
    sourceType = 1;

    constructor(
        public dialogRef: MatDialogRef<ImportDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public modalData: any) {

    }

    onSubmit(): void {
        
    }

    onNoClick(): void {
        this.dialogRef.close();
    }

}
