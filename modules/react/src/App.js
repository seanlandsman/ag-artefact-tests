import React, { useState } from 'react';
import { AgGridReact } from '@ag-grid-community/react';

import { ModuleRegistry } from '@ag-grid-community/core';

import { ClientSideRowModelModule } from "@ag-grid-community/client-side-row-model";
import { StatusBarModule } from "@ag-grid-enterprise/status-bar";
import '@ag-grid-community/styles/ag-grid.css';
import '@ag-grid-community/styles/ag-theme-alpine.css';

ModuleRegistry.register(ClientSideRowModelModule);
ModuleRegistry.register(StatusBarModule);

const App = () => {
  const [rowData] = useState([
    {make: "Toyota", model: "Celica", price: 35000},
    {make: "Ford", model: "Mondeo", price: 32000},
    {make: "Porsche", model: "Boxster", price: 72000}
  ]);

  const [columnDefs] = useState([
    { field: 'make' },
    { field: 'model' },
    { field: 'price' }
  ])

  return (
      <div className="ag-theme-alpine" style={{height: 400, width: 600}}>
        <AgGridReact
            rowData={rowData}
            columnDefs={columnDefs}>
        </AgGridReact>
      </div>
  );
};


export default App;
