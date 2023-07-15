import React, { useCallback,useEffect, useState,useMemo } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-enterprise';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

const ExcelLikeTable = () => {
  const gridStyle = useMemo(() => ({ height: '93%', width: '100%' }), []);
  const [rowData, setRowData] = useState();
  const [columnDefs, setColumnDefs] = useState([
    { field: 'athlete', minWidth: 200 },
    { field: 'age' },
    { field: 'country', minWidth: 150 },
    { field: 'year' },
    { field: 'date', minWidth: 150 },
    { field: 'sport', minWidth: 150 },
    { field: 'gold' },
    { field: 'silver' },
    { field: 'bronze' },
    { field: 'total' },
  ]);
  
  const defaultColDef = useMemo(() => {
    return {
      editable: true,
      flex: 1,
      minWidth: 100,
      resizable: true,
    };
  }, []);

  const onGridReady = useCallback((params) => {
    fetch('https://www.ag-grid.com/example-assets/olympic-winners.json')
      .then((resp) => resp.json())
      .then((data) => setRowData(data));
  }, []);

  return (
    <div className="ag-theme-alpine" style={{ height: '800px', width: '1000px' }}>
      <AgGridReact 
      rowData={rowData} 
      columnDefs={columnDefs} 
      defaultColDef={defaultColDef}
      enableRangeSelection={true}
      copyHeadersToClipboard={false}
      onGridReady={onGridReady}
      />
    </div>
  );
};

export default ExcelLikeTable;
