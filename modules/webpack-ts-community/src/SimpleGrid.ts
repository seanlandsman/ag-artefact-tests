import { Grid, GridOptions, ModuleRegistry } from "@ag-grid-community/core";
import { ClientSideRowModelModule } from "@ag-grid-community/client-side-row-model";
import { StatusBarModule } from "@ag-grid-enterprise/status-bar";

// or, if using Enterprise features
// import {Grid, GridOptions, ModuleRegistry} from "@ag-grid-enterprise/core";
// import {RowGroupingModule} from '@ag-grid-enterprise/row-grouping';
// import {ClientSideRowModelModule} from "@ag-grid-community/client-side-row-model";

ModuleRegistry.register(ClientSideRowModelModule);
ModuleRegistry.register(StatusBarModule);

import './styles.scss';

class SimpleGrid {
    private gridOptions: GridOptions = <GridOptions>{};

    constructor() {
        this.gridOptions = {
            columnDefs: this.createColumnDefs(),
            rowData: this.createRowData(),
            statusBar: {
                statusPanels: [
                    {
                        statusPanel: 'agTotalAndFilteredRowCountComponent',
                        align: 'left',
                    }
                ]
            },
        };

        let eGridDiv:HTMLElement = <HTMLElement>document.querySelector('#myGrid');
        new Grid(eGridDiv, this.gridOptions);
    }

    // specify the columns
    private createColumnDefs() {
        return [
            { field: "make" },
            { field: "model" },
            { field: "price" }
        ];
    }

    // specify the data
    private createRowData() {
        return [
            { make: "Toyota", model: "Celica", price: 35000 },
            { make: "Ford", model: "Mondeo", price: 32000 },
            { make: "Porsche", model: "Boxster", price: 72000 }
        ];
    }
}

new SimpleGrid();