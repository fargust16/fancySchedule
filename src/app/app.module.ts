import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UploadDirective } from './directives/upload.directive';
import {DatepickerModule} from "ng2-datepicker";

@NgModule({
  declarations: [
    AppComponent,
    UploadDirective
  ],
  imports: [
    BrowserModule,
    NgbModule,
    DatepickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
