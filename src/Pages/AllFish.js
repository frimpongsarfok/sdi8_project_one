import React from "react";
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';
import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import FishCard from "../components/Modules/FishCard";
import AppNavBar from "../components/Layouts/NavBar/AppNavBar";
import { useNavigate } from 'react-router-dom';
import AppFooter from "../components/Layouts/Footer/Components/AppFooter";
function AllFish(props){
   
    let navigate=useNavigate();
    return(
        <section>
            <header style={{textAlign:'center'}}>
            <AppNavBar object={props.object}></AppNavBar>
            <Typography gutterBottom variant="h4" component="h1"  >
                    All Fish    
            </Typography> 
            </header>    
            <article>
                
              <Container sx={{maxHeight:'65vh',width:'90vw',overflow:'auto'}}>
                  <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2}>
                        {
                        props.object.state.allFish.map(ele=> 
                        
                        <Grid key={ele.id} item xs={12} md={4} lg={2} 
                          onClick={()=>{
                            props.object.handleSelectedFish(ele);
                            navigate(`/fish?id=${ele.id}`);
                            }} > 
                          <FishCard fish={ele}   width={'100%'} height='100%'/>
                        </Grid>)
                        }
                      
          
                    </Grid>
                  </Box>
              </Container>
             </article>
             <AppFooter/>
       </section>    
    );
}


export default AllFish;