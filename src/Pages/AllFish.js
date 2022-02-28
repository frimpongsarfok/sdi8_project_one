import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Container } from '@mui/material';
import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import FishCard from "../components/Modules/FishCard";
import AppNavBar from "../components/Layouts/AppNavBar";
import {useNavigate} from 'react-router-dom'
function AllFish(props){
   
    let navigate=useNavigate();
    return(
        <section>
            <header>
                 <AppNavBar object={props.object}></AppNavBar> 
            </header>    
            <article>
                
              <Container sx={{maxHeight:'80vh',width:'90vw',overflow:'auto'}}>
                  <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2}>
                        {
                        props.object.state.allFish.map(ele=> 
                        <Grid key={ele.id} item xs={2} onClick={()=>navigate(`/fish?id=${ele.id}`)} > 
                          <FishCard fish={ele}   width={300} height='100%'/>
                        </Grid>)
                        }
                      
          
                    </Grid>
                  </Box>
              </Container>
             </article>
       </section>    
    );
}


export default AllFish;