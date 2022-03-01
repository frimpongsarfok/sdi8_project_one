import React from "react";
import ListTable from "../components/Modules/ListTable";
import AppNavBar from "../components/Layouts/NavBar/AppNavBar";
import { Button, Typography } from '@mui/material';
import AppFooter from "../components/Layouts/Footer/Components/AppFooter";
function DonateList(props){

    return (
    <section>
        <header style={{textAlign:'center'}}>
            <AppNavBar object={props.object}></AppNavBar>
            <Typography gutterBottom variant="h4" component="h1"  >
                    Donate List    
            </Typography> 
        </header> 
      <article>
            <ListTable object={props.object} tableName='donate_list'></ListTable>
            <Button onClick={(event)=>{props.object.handleDeleteFromList('donate_list')}} color="error">Delete Row</Button>
      </article>
    
    </section>);
}

export default DonateList;