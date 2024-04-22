import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import CalendarToday from '@mui/icons-material/CalendarToday';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid';
import DoneIcon from '@mui/icons-material/Done';
import ClearIcon from '@mui/icons-material/Clear';
import { Box } from '@mui/system';

export default function  Availability(props) {

    const mons={1:'Jan',2:'Feb',3:'Mar',4:'Apr',5:'May',6:'Jun',7:'Jul',8:'Aug',9:'Sep',10:'Oct',11:'Nov',12:'Dec'}
  return (
    <Box>
    <List
      sx={{
        width: '100%',
        height: '100%',
    
        bgcolor: 'background.paper',
      }}
    >
        <li>
        <Typography
          sx={{ mt: 0.5, ml: 9, fontSize: 15}}
          color="text.secondary"
          display="block"
          variant="caption"
        >
          Availability
        </Typography>
      </li>
      <ListItem>
        <ListItemText primary="Location" secondary={`${props.fish.availability.location}`} />
      </ListItem>
      <Divider component="p" variant="inset" />
      <ListItem>
        <ListItemText primary="Rarity" secondary={`${props.fish.availability.rarity}`} />
      </ListItem>
      <Divider component="p" variant="inset" />
      <ListItem>
        
    
             <Grid container spacing={2}sx={{ with:'100%'}}>
                <Grid item xs={6} md={6}>
                <Avatar>
                        <CalendarToday />
                    </Avatar>
                <ListItemText primary="Northern Hemisphere Season" secondary=" Month(s) Available" />
    

                    <Box>
                        {props.fish.availability['month-array-northern'].map(ele=><Chip key={ele} label={mons[ele]} variant="outlined" />)}
                    </Box>
                </Grid>
                <Grid item xs={6} md={6}>
                <Avatar>
                        <CalendarToday />
                    </Avatar>
                  <ListItemText primary="Southern Hemisphere Season" secondary=" Month(s) Available"  />
                    <Box>  
                        {props.fish.availability['month-array-southern'].map(ele=><Chip key={ele} label={mons[ele]} variant="outlined" />)}
                    </Box>
                </Grid>
            </Grid>
        
      </ListItem>
      
      <Divider/>
      <ListItem>
           
        <Grid container spacing={2}>
            <Grid item xs={6} md={6}>
            <ListItemText primary="Time" secondary={props.fish.availability.time} />
             {/* <Divider component="p" variant="inset" />
            <ListItemText primary="Rarity" secondary={props.fish.availability.rarity} /> */}
            </Grid>
           
            <Grid item xs={6} md={6}>
                <Chip label="Is All Day" variant="outlined" onDelete={()=>{}} deleteIcon={props.fish.availability.isAllDay?<DoneIcon/>:<ClearIcon/>} />
                <Chip label="Is All Year" variant="outlined"  onDelete={()=>{}} deleteIcon={props.fish.availability.isAllYear?<DoneIcon/>:<ClearIcon/>} />
            </Grid>
            <Divider component="p" variant="inset" />
        </Grid>
    
      </ListItem>
    </List>
    </Box>
  );
}
