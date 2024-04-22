import React from "react";
import ListTable from "../components/Modules/ListTable";
import AppNavBar from "../components/Layouts/NavBar/AppNavBar";
import { Button,Typography } from '@mui/material';
import AppFooter from "../components/Layouts/Footer/Components/AppFooter";
function CaughtList(props){

    return (
    <section>
         <header style={{textAlign:'center'}}>
            <AppNavBar object={props.object}></AppNavBar>
            <Typography gutterBottom variant="h4" component="h1"  >
                    Caught List    
            </Typography> 
        </header> 
      <article>
            <ListTable object={props.object} tableName='caught_list'></ListTable>
            <Button onClick={(event)=>{props.object.handleDeleteFromList('caught_list')}} color="error">Delete Row</Button>
      </article>
      <AppFooter></AppFooter>
    </section>);
}

export default CaughtList;