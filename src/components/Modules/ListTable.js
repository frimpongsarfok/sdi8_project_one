import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useDemoData } from '@mui/x-data-grid-generator';


export default function ListTable(props) {
    const columns = [
      { field: 'id', headerName: 'ID', width: 20 },
      { field: 'name', headerName: 'Name', width: 130 },
      { field: 'icon', headerName: 'Icon', width: 130 },
    ];
    
    const rows = [
      { id: 1, name: 'Snow', icon: 'Jon'},{ id: 2, name: 'Snoow', icon: 'Joon'},
    ];
    
   
      return (
        <div style={{ height: '70vh', width: '100%' }}>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            checkboxSelection
            onSelectionModelChange={(ids) => {
                console.log(ids);
                props.object.handleSelectedList(props.tableName,ids);
                
              }}
          />
         
        </div>
      );
    
    
}