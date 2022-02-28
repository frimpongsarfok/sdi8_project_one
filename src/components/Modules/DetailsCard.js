import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import CalendarToday from '@mui/icons-material/CalendarToday';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ButtonGroup from '@mui/material/ButtonGroup';
import Grid from '@mui/material/Grid';
import { Box } from '@mui/system';
import { right } from '@popperjs/core';

export default function  DetailsCard(props) {
  return (
    <Box>
    <List
      sx={{
        width: '100%',
        height: '100%',
    
        bgcolor: 'background.paper',
      }}
    >
        
        <Typography
          sx={{ mt: 0.5, ml: 9, fontSize: 25 }}
          color="text.secondary"
          display="block"
          variant="caption"
  
        >
          Details
        </Typography>
      
      <ListItem>
       
        <Grid container spacing={2}>
            <Grid item xs={6} md={6}>
            
                <ListItemText primary={`ID #`} secondary={`${props.fish.id}`} />
                <Divider component="p" variant="inset" />
                <ListItemText primary="Catch Phrase" secondary={`${props.fish['catch-phrase']}`} />
                <Divider component="p" variant="inset" />

            </Grid>
            <Grid item xs={6} md={6}>
                <Box   >
                   <Button variant="outlined" sx={{color:'inherit',backgroundColor:'inherit'}} >
                                Compare
                    </Button>
                </Box>

            </Grid>
        </Grid>
      </ListItem>

      
      <ListItem>
        <ListItemText primary="Museum Phrase" secondary={`${props.fish['museum-phrase']}`} />
      </ListItem>
      <Divider component="li" variant="inset" />
      <ListItem>
        <ListItemText primary="Shadow Size" secondary={`${props.fish.shadow}`} />
      </ListItem>
      <Divider component="li" variant="inset" />
      <Divider/>
      <ListItem>
         <Box sx={{display: 'flex','& > *': {m: 3}, }} >
             Add To :
           <Button variant="outlined"  sx={{color:'inherit',backgroundColor:'inherit'}}>
                Catch List
            </Button>
            <Button variant="outlined" sx={{color:'inherit',backgroundColor:'inherit'}} >
                Donate List
            </Button>
            <Button variant="outlined"  sx={{color:'inherit',backgroundColor:'inherit'}}>
                Caught List
            </Button>
        </Box>
      </ListItem>
    </List>
   
   
    </Box>
  );
}
