import React from "react";
import ListTable from "../components/Modules/ListTable";
import AppNavBar from "../components/Layouts/AppNavBar";
import { Button } from '@mui/material';
function CatchList(props){

    return (
    <section>
        <header>
            <AppNavBar object={props.object}></AppNavBar> 
        </header> 
      <article>
            <ListTable object={props.object} tableName='catch_list'></ListTable>
            <Button>Delete Row</Button>
      </article>
    </section>);
}

export default CatchList;