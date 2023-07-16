import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
class MyTable extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      columnDefs: [
        { headerName: 'Name', field: 'name' },
        { headerName: 'Age', field: 'age' },
        {
          headerName: 'Options',
          field: 'options',
          cellEditor: 'agSelectCellEditor',
          cellEditorParams: {
            values: ['Option 1', 'Option 2', 'Option 3'],
          },
        },
      ],
      rowData: [
        { name: 'John', age: 25, options: 'Option 1' },
        { name: 'Jane', age: 30, options: 'Option 2' },
        { name: 'Bob', age: 35, options: 'Option 3' },
      ],
    };
  }

  render() {
    return (
      <div className="ag-theme-alpine" style={{ height: 400, width: 600 }}>
        <AgGridReact
          columnDefs={this.state.columnDefs}
          rowData={this.state.rowData}
          defaultColDef={{
            editable: true,
            resizable: true,
          }}
        />
      </div>
    );
  }
}

export default MyTable;

