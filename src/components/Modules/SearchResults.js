import * as React from 'react';
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { useNavigate } from 'react-router';
import ListItemIcon from '@mui/material/ListItemIcon';


export default function SearchResult(props) {
    let navigate=useNavigate()
  return (
    <Box sx={{width: "auto", maxHeight: '50vh', overflow: 'auto', bgcolor: "background.paper",textAlign:'center'}}>
      <List component="nav" aria-label="main mailbox folders" sx={{color:'black'}}>
        
      {props.object.state.searchResult.length?
      
      (props.object.state.searchResult.map(ele=>(
        <ListItemButton key={ele.id}
          onClick={(event) => {
            props.object.handleSelectedFish(ele);
            navigate(`/fish?id=${ele.id}`); props.object.handleClearSearchResult()}}
        >
          <ListItemText primary={ele['file-name'].replace('_',' ')} />
        <ListItemIcon>
                <img src={ele.icon_uri} style={{height:50,width:60}}/>
        </ListItemIcon>
        </ListItemButton>
      ))):(<></>)}
      </List>
    </Box>
  );
}
