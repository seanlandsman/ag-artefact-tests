import {Grid, GridOptions, ModuleRegistry} from "@ag-grid-community/core";
import {ClientSideRowModelModule} from "@ag-grid-community/client-side-row-model";
import {StatusBarModule} from "@ag-grid-enterprise/status-bar";

import {MasterDetailModule} from '@ag-grid-enterprise/master-detail';
import './styles.scss';

ModuleRegistry.registerModules([ClientSideRowModelModule, MasterDetailModule]);

class SimpleGrid {
    private gridOptions: GridOptions = {
        columnDefs: [
            // group cell renderer needed for expand / collapse icons
            {field: 'name', cellRenderer: 'agGroupCellRenderer'},
            {field: 'account'},
            {field: 'calls'},
            {field: 'minutes', valueFormatter: "x.toLocaleString() + 'm'"},
        ],
        defaultColDef: {
            flex: 1,
        },
        masterDetail: true,
        detailCellRendererParams: {
            detailGridOptions: {
                rowSelection: 'multiple',
                suppressRowClickSelection: true,
                pagination: true,
                paginationAutoPageSize: true,
                columnDefs: [
                    {field: 'callId', checkboxSelection: true},
                    {field: 'direction'},
                    {field: 'number', minWidth: 150},
                    {field: 'duration', valueFormatter: "x.toLocaleString() + 's'"},
                    {field: 'switchCode', minWidth: 150},
                ],
                defaultColDef: {
                    sortable: true,
                    flex: 1,
                },
                statusBar: {
                    statusPanels: [
                        {
                            statusPanel: 'agTotalAndFilteredRowCountComponent',
                            align: 'left',
                        }
                    ]
                },
            },
            getDetailRowData: (params: any) => {
                params.successCallback(params.data.callRecords)
            },
        },
    }

    constructor() {

        let eGridDiv: HTMLElement = <HTMLElement>document.querySelector('#myGrid');
        new Grid(eGridDiv, this.gridOptions, {modules: [StatusBarModule]});

        fetch('https://www.ag-grid.com/example-assets/master-detail-data.json')
            .then(response => response.json())
            .then((data) => {
                this.gridOptions.api!.setRowData(data)
            })

    }

}

new SimpleGrid();