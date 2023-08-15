import { Component } from '@angular/core';
import { ColDef, GridOptions } from '@ag-grid-community/core';

interface ICar {
  make: string;
  model: string;
  price: number;
  sold?: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  columnDefs: ColDef<ICar>[] = [
    { field: 'make', cellDataType: 'text' },
    { field: 'model', cellDataType: 'text' },
    { field: 'price', cellDataType: 'number' },
    { field: 'sold', cellDataType: 'boolean' }
  ];

  rowData: ICar[] = [
    { make: 'Toyota', model: 'Celica', price: 35000 },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: 'Porsche', model: 'Boxster', price: 72000 }
  ];

  gridOptions: GridOptions = {
    defaultColDef: {
      sortable: true,
      filter: true,
      //  enableRowGroup: true,
      resizable: true,
      flex: 1,
    }
  }

}
