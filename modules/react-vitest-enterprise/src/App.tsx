import {useState} from 'react';

import {AgGridReact} from '@ag-grid-community/react';
import {ModuleRegistry} from '@ag-grid-community/core';
import {ClientSideRowModelModule} from "@ag-grid-community/client-side-row-model";
import {StatusBarModule} from "@ag-grid-enterprise/status-bar";
import {GridChartsModule} from "@ag-grid-enterprise/charts";
import '@ag-grid-community/styles/ag-grid.css'; // Core grid CSS, always needed
import '@ag-grid-community/styles/ag-theme-alpine.css'; // Optional theme CSS

ModuleRegistry.registerModules([ClientSideRowModelModule,StatusBarModule,GridChartsModule]);

const App = () => {
    const [rowData] = useState([
        {make: "Toyota", model: "Celica", price: 35000},
        {make: "Ford", model: "Mondeo", price: 32000},
        {make: "Porsche", model: "Boxster", price: 72000}
    ]);

    const [columnDefs] = useState([
        {field: 'make'},
        {field: 'model'},
        {field: 'price'}
    ]);

    const statusBar = {
        statusPanels: [
            {
                statusPanel: 'agTotalAndFilteredRowCountComponent',
                align: 'left',
            }
        ]
    }


    return (
        <div className="ag-theme-alpine" style={{height: 400, width: 600}} role="grid">
            <AgGridReact<any>
                rowData={rowData}
                columnDefs={columnDefs}
                statusBar={statusBar}>
            </AgGridReact>
        </div>
    );
};
export default App;
