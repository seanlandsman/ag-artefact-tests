import { Component } from '@angular/core';
import { AgGridModule } from '@ag-grid-community/angular';

import { ClientSideRowModelModule } from '@ag-grid-community/client-side-row-model';
import { ModuleRegistry, ColDef } from '@ag-grid-community/core';
ModuleRegistry.registerModules([ClientSideRowModelModule]);

@Component({
  standalone: true,
  imports: [AgGridModule],
  selector: 'angular-nx-jest-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  colDefs: ColDef[] = [
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
