import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NewDialogComponent } from './dashboard/new-dialog/new-dialog.component';
import { SharedMatModule } from './shared-mat/shared-mat.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedMatModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [NewDialogComponent]

})
export class AppModule { }
