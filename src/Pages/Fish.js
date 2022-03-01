
import React from "react";
import App from "../App";
import FishCard from "../components/Modules/FishCard";
import {useParams} from 'react-router-dom'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import AppNavBar from "../components/Layouts/NavBar/AppNavBar";
import Availability from "../components/Modules/Availability";
import { Divider } from "@mui/material";
import DetailsCard from "../components/Modules/DetailsCard";
import AppFooter from "../components/Layouts/Footer/Components/AppFooter";
function Fish(props){
    let key=props.object.state.getQuery('id');
    let fish=props.object.state.allFish.filter(ele=>ele.id==key)[0];
    return (
        <section>
            <header>
                 <AppNavBar object={props.object}></AppNavBar> 
            </header>
            <article>
            <Container maxWidth='90vw' >
                       
            <Box md={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <Box sx={{ bgcolor: '#cfe8fc', height:'40vh', width: '100%',backgroundColor:'white' , }}>
                            {fish?(<FishCard   fish={fish} height='45%' width='45%'></FishCard>):(<></>)}
                        </Box>
                        <Divider/>
                        <Box sx={{ bgcolor: '#cfe8fc', height:'35vh',  width: '100%' ,backgroundColor:'white' }}>
                           
                            {fish?(<Availability   fish={fish} ></Availability>):(<></>)}
                        </Box>
                    </Grid>
                    <Grid item xs={6} >
                        <Box sx={{ bgcolor: '#cfe8fc', width: '100%',height:'90vh' ,backgroundColor:'white' }}>

                            {fish?(<DetailsCard  object={props.object} fish={fish} ></DetailsCard>):(<></>)}

                        </Box>
                    </Grid>
                </Grid>
                </Box>       
            </Container>
            </article>
            <AppFooter></AppFooter>
        </section>
    );

    
}

export default Fish;
