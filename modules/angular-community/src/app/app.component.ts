import {Component} from '@angular/core';
import {ColDef, ModuleRegistry} from '@ag-grid-community/core';

import {ClientSideRowModelModule} from "@ag-grid-community/client-side-row-model";

ModuleRegistry.register(ClientSideRowModelModule);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  columnDefs: ColDef[] = [
    {field: 'make'},
    {field: 'model'},
    {field: 'price'}
  ];

  rowData = [
    {make: 'Toyota', model: 'Celica', price: 35000},
    {make: 'Ford', model: 'Mondeo', price: 32000},
    {make: 'Porsche', model: 'Boxster', price: 72000}
  ];
}
