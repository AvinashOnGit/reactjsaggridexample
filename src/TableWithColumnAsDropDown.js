import React, { useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

const TableWithColumnAsDropDown = () => {
  const [rowData, setRowData] = useState([]);
  const [gridApi, setGridApi] = useState(null);

  const columnDefs = [
    {
      headerName: 'Name',
      field: 'name',
      editable: true,
    },
    {
      headerName: 'Status',
      field: 'status',
      editable: true,
      cellEditor: 'agSelectCellEditor',
      cellEditorParams: {
        values: ['Option 1', 'Option 2', 'Option 3'],
      },
    },
  ];

  const onGridReady = (params) => {
    setGridApi(params.api);
  };

  const addRow = () => {
    const newItem = { name: '', status: '' };
    gridApi.applyTransaction({ add: [newItem] });
  };

  const deleteRow = () => {
    const selectedRows = gridApi.getSelectedRows();
    gridApi.applyTransaction({ remove: selectedRows });
  };

  const saveAndExport = () => {
    const rowData = gridApi.getRowData();
    // Save or export the rowData as needed
    console.log(rowData);
  };

  return (
    <div>
      <div className="button-bar">
        <button onClick={addRow}>Add Row</button>
      </div>
      <div className="ag-theme-alpine" style={{ height: '400px', width: '600px' }}>
        <AgGridReact
          columnDefs={columnDefs}
          rowData={rowData}
          onGridReady={onGridReady}
        ></AgGridReact>
      </div>
    </div>
  );
};

export default TableWithColumnAsDropDown;
