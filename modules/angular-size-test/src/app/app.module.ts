import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AgGridModule } from '@ag-grid-community/angular';
import { ModuleRegistry } from '@ag-grid-community/core';
import { ClientSideRowModelModule } from '@ag-grid-community/client-side-row-model';

import { SetFilterModule } from '@ag-grid-enterprise/set-filter';
import { RichSelectModule } from '@ag-grid-enterprise/rich-select';
import { MenuModule } from '@ag-grid-enterprise/menu';
import { ColumnsToolPanelModule } from '@ag-grid-enterprise/column-tool-panel';
import { RangeSelectionModule } from '@ag-grid-enterprise/range-selection';
import { StatusBarModule } from '@ag-grid-enterprise/status-bar';
import { SideBarModule } from '@ag-grid-enterprise/side-bar';
import { ExcelExportModule } from '@ag-grid-enterprise/excel-export';


ModuleRegistry.registerModules([ClientSideRowModelModule,
  SetFilterModule,
  RichSelectModule,
  StatusBarModule,
  MenuModule,
  SideBarModule,
  //ColumnsToolPanelModule,
  ClientSideRowModelModule,
  RangeSelectionModule,
  ExcelExportModule,
]);

@NgModule({ 
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AgGridModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
