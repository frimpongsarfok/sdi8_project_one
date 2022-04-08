import React from "react";
import  Container from "@mui/material/Container";
import SendIcon from '@mui/icons-material/Send';
import {Input}  from '@mui/icons-material';
import TextField from '@mui/material/TextField';

import SearchResult from "../components/Modules/SearchResults";
import { Box, padding } from "@mui/system";
import { useNavigate } from "react-router";
import { Button, Typography } from "@mui/material";
import AppFooter from "../components/Layouts/Footer/Components/AppFooter";
function MainSearch(props){
   let navigation=useNavigate()
    return (
        <section>  
            <header style={{textAlign:'center',marginTop:'5vh'}}>
                <Typography gutterBottom variant="h3" component="h1"> Animal Crossing Fishing Index </Typography>
                <img width={170} height={90} src={process.env.PUBLIC_URL + '/icon.png'}/>
            </header>  
            <article>   
               
                <Container  sx={{width:'100%',height:'50vh',padding:'auto',marginTop:'2vh'}}>
                    <Box >    
                        <TextField sx={{width:'100%'}} id="outlined-search" label="Search field" placeholder='type fish name or id here' required={true} onChange={(event)=>{props.object.handleSearchChange(event.target.value)}}/>
                        <Button onClick={()=>{navigation('/AllFish')}} sx={{color:'black'}}>See All</Button> 
                        <SearchResult  object={props.object}></SearchResult>
                      
                    </Box>
                </Container>
               
            </article>
            <AppFooter></AppFooter>
        </section>
    );
    
}
export default MainSearch;