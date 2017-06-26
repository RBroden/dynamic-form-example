import { BrowserModule } from '@angular/platform-browser';
import {
  BrowserAnimationsModule,
  NoopAnimationsModule
} from '@angular/platform-browser/animations';
import {
  createInputTransfer,
  createNewHosts,
  removeNgStyles,
} from '@angularclass/hmr';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import { FormPageComponent } from './form-page.container';
import { FormWrapperComponent } from './form-wrapper.component';
import { FormTopComponent } from './form-top.component';
import { FormMiddleComponent } from './form-middle.component';

// JS Libraries
import 'hammerjs';

@NgModule({
  declarations: [
    AppComponent,
    FormPageComponent,
    FormWrapperComponent,
    FormTopComponent,
    FormMiddleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    MaterialModule,
    BrowserAnimationsModule,
    NoopAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
