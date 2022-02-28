import React from "react";
import App from "../App";
import FishCard from "../components/Modules/FishCard";
import {useParams} from 'react-router-dom'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import AppNavBar from "../components/Layouts/AppNavBar";
import Availability from "../components/Modules/Availability";
import { Divider } from "@mui/material";
import DetailsCard from "../components/Modules/DetailsCard";
function Fish(props){

    console.log( 'ss', props.object.state.getQuery('id'));
    //props.object.setState({})
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
                        <Box sx={{ bgcolor: '#cfe8fc', height:'40vh', width: '100%',backgroundColor:'white' }}>
                            {fish?(<FishCard   fish={fish} ></FishCard>):(<></>)}
                        </Box>
                        <Divider/>
                        <Box sx={{ bgcolor: '#cfe8fc', height:'40vh',  width: '100%' ,backgroundColor:'white' }}>
                           
                            {fish?(<Availability   fish={fish} ></Availability>):(<></>)}
                        </Box>
                    </Grid>
                    <Grid item xs={6}>
                        <Box sx={{ bgcolor: '#cfe8fc', width: '100%',height:'87vh' ,backgroundColor:'white' }}>

                            {fish?(<DetailsCard   fish={fish} ></DetailsCard>):(<></>)}

                        </Box>
                    </Grid>
                </Grid>
                </Box>       
            </Container>
            </article>
        </section>
    );
}

export default Fish;
