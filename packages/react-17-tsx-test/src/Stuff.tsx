import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import { ColDef } from 'ag-grid-community';

import 'ag-grid-community/styles/ag-grid.min.css';
import 'ag-grid-community/styles/ag-theme-balham.min.css';

type TestData = {
  field1: string;
  field2: string;
  field3: string;
};

const testData: TestData[] = [
  {
    field1: 'foo',
    field2: 'bar',
    field3: 'spam',
  },
  {
    field1: 'argy',
    field2: 'bargy',
    field3: 'cargy',
  },
  {
    field1: 'gleep',
    field2: 'glorp',
    field3: 'xantham',
  },
];

const columnDefs: ColDef<TestData>[] = [
  {
    field: 'field1',
    headerName: 'Field 1',
  },
  {
    field: 'field2',
    headerName: 'Field 2',
  },
  {
    field: 'field3',
    headerName: 'Field 3',
  },
];

export const Stuff = () => {
  return (
    <div style={{ margin: '16px' }}>
      <h1>Test table</h1>
      <div className="ag-theme-balham" style={{ height: '500px' }}>
        <AgGridReact rowData={testData} columnDefs={columnDefs} />
      </div>
    </div>
  );
};
