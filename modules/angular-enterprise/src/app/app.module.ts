import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AgGridModule} from '@ag-grid-community/angular';

import {AppComponent} from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AgGridModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
