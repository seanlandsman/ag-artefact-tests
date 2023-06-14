import {useState} from 'react';

import {AgGridReact} from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

const Home = () => {

    const [columnDefs]: any = useState([
        {field: "make"},
        {field: "model"},
        {field: "price"}
    ]);
    const [rowData] = useState([
        {make: "Toyota", model: "Celica", price: 35000},
        {make: "Ford", model: "Mondeo", price: 32000},
        {make: "Porsche", model: "Boxster", price: 72000}
    ]);

    return (
        <div
            className="ag-theme-alpine"
            style={{height: '600px'}}
        >
            <AgGridReact
                rowData={rowData}
                columnDefs={columnDefs}
            ></AgGridReact>
        </div>);
};

export default Home;
