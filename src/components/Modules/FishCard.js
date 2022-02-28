
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Divider } from '@mui/material';
import { useParams } from 'react-router';
import ViewImage from './ViewImage';
import { Box, height } from '@mui/system';


export default function FishCard(props) {
  console.log(props)
  return (
    <Card sx={{height:'100%',width:'100%'}}>
      <CardActionArea>
        <CardMedia 
          component="img"
          image={props.fish.image_uri}
          sx={{height:'50%',width:'50%',margin:'auto'}}
          alt={props.fish['file-8name']}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
             {props.fish['file-name'].replace('_',' ')} 
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
          Tom Nook's Price: <em><b>{props.fish.price}</b></em> | CJ's Price:<em><b> {`${props.fish['price-cj']}`}</b></em> 
          </Typography>
          <Typography variant="body2" color="text.secondary">
            
          </Typography>
        </CardContent>

      </CardActionArea>
    </Card>
   
   );
}
