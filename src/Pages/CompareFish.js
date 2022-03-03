//http://localhost:3000/compare?fishA=1&fishB=2

import React from "react";
import {useLocation} from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, List, ListItem,Grid,Divider,ListItemText, Container } from '@mui/material';
import AppNavBar from "../components/Layouts/NavBar/AppNavBar";
import AppFooter from "../components/Layouts/Footer/Components/AppFooter";
import { Box } from "@mui/system";

export default  function CompareFish(props){
    let fishAId=parseInt(props.object.state.GetQuery('fishA'));
    let fishBId=parseInt(props.object.state.GetQuery('fishB'));
    let fishA=props.object.state.allFish.filter(ele=>ele.id===fishAId)[0];
    let fishB=props.object.state.allFish.filter(ele=>ele.id===fishBId)[0];
  const TmpFishCard=(props)=>(
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="100%"
              image={props.fish.image_uri}
              alt="green iguana"
            />
            <CardContent>
              <List >
                  <ListItem>
                    <Typography gutterBottom variant="h4" component="div">
                      {props.fish.name['name-USen']}
                    </Typography>
                  </ListItem>
                  <Divider component="p" />
                   <ListItemText primary={`Price CJ`} secondary={props.fish['price-cj']}/>
                   <Divider component="p"  />
                   <ListItemText primary={` Selling Price`} secondary= {props.fish.price} />
                   <Divider component="p"  />
                   <ListItemText primary={`Location`} secondary={props.fish.availability.location} />
                    <Divider component="p" />
                    <ListItemText primary={` Rarity`} secondary= {props.fish.availability.rarity} />
                    <Divider component="p"  />
                    <ListItemText primary={` Catch Phrase`} secondary= {props.fish['catch-phrase']} />
                    <Divider component="p" />
                    <ListItemText primary={` Musuem Phrase`} secondary= {props.fish['museum-phrase']} />
                    
               </List>
            </CardContent>
          </CardActionArea>
        </Card>
    );
    console.log(fishA,fishB)
    return (
    <section style={{textAlign:'center'}}>
       <header >
            <AppNavBar object={props.object}></AppNavBar>
            <Typography gutterBottom variant="h4" component="h1"  >
                    Compare Fish 
            </Typography> 
            </header> 
        <article>
          <Container>
                <Box>
                  <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>
                            {fishA ?(<TmpFishCard fish={fishA}/>):<p>Fish A  is empty</p>}
                        </Grid>
                        <Grid item xs={12} md={6}>
                            {fishB ?(<TmpFishCard fish={fishB}/>):<p>Fish B is empty</p>}
                        </Grid>
                  </Grid>
                </Box>
          </Container>
        </article>
        <AppFooter/>
    </section>);
  
}

