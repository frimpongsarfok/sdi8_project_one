import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';


export default function ListTable(props) {
    const columns = [
      { field: 'id', headerName: 'ID', width: 20 },
      { field: 'name', headerName: 'Name', width: 130 },
      { field: 'catch-phrase', headerName: 'Catch Phrase', width: 550 },
    ];
    
    let rows =[];
     // { id: 1, name: 'Snow', icon: 'Jon'},{ id: 2, name: 'Snoow', icon: 'Joon'},
      switch(props.tableName){
          case 'catch_list':{
             rows=props.object.state.catchList.data.map(ele=>({ id: ele.id, name: ele['file-name'], 'catch-phrase': ele['catch-phrase']}))
          }break;
          case 'caught_list':{
            rows=props.object.state.caughtList.data.map(ele=>({ id: ele.id, name: ele['file-name'], 'catch-phrase': ele['catch-phrase']}))
          }break;
          case 'donate_list':{
            rows=props.object.state.donateList.data.map(ele=>({ id: ele.id, name: ele['file-name'], 'catch-phrase': ele['catch-phrase']}))
          }break;
          default:{
              throw Error('Wrong Container -ListTable')
          }
      }
    
   
      return (
        <article style={{ height: '55vh', width: '100%' }}>
           
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            checkboxSelection
            onSelectionModelChange={(ids) => {
               
                props.object.handleSelectedList(props.tableName,[...ids]);
                
              }}
          />
         
        </article>
      );
    
    
}