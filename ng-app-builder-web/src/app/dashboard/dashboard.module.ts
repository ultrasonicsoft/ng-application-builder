import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { SharedMatModule } from '../shared-mat/shared-mat.module';
import { NewDialogComponent } from './new-dialog/new-dialog.component';
import { DataService } from '../data.service';
import { ImportDialogComponent } from './import-dialog/import-dialog.component';


@NgModule({
    declarations: [
        DashboardComponent,
        NewDialogComponent,
        ImportDialogComponent,
    ],
    imports: [
        CommonModule,
        HttpClientModule,
        FormsModule,
        SharedMatModule,
        DashboardRoutingModule
    ],
    providers: [DataService]
})
export class DashboardModule { }
