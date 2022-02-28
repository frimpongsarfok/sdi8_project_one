import React from "react";
import  Container from "@mui/material/Container";
import SendIcon from '@mui/icons-material/Send';
import {Input}  from '@mui/icons-material'
import TextField from '@mui/material/TextField';

import SearchResult from "../components/Modules/SearchResults";
import { Box } from "@mui/system";
import { useNavigate } from "react-router";
import { Button, Typography } from "@mui/material";
function MainSearch(props){
   let navigation=useNavigate()
    return (
        <section>  
            <header style={{textAlign:'center'}}>
                <Typography gutterBottom variant="h3" component="h1"> Animal Crossing Fishing Index</Typography>
            </header>  
            <article>   
               
                <Container  sx={{width:'100%',height:'70vh'}}>
                    <Box>    
                        <TextField sx={{width:'100%'}} id="outlined-search" label="Search field" placeholder='type fish name or id here' required={true} onChange={(event)=>{props.object.handleSearchChange(event.target.value)}}/>
                        <Button onClick={()=>{navigation('/AllFish')}}>See All</Button> 
                        <SearchResult  object={props.object}></SearchResult>
                      
                    </Box>
                </Container>
            </article>
        </section>
    );
    
}
export default MainSearch;