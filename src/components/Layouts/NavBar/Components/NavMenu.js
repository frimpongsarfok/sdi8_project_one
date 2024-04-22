import * as React from 'react';
import { useNavigate } from 'react-router';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

export default function NavMenu() {
  let navigate=useNavigate();
  return (
    <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <React.Fragment>
          <Button variant="contained" {...bindTrigger(popupState)}  color='inherit' sx={{backgroundColor:'black','&:hover': {backgroundColor:'black'}}}>
          <MenuIcon />
          </Button>
          <Menu {...bindMenu(popupState)}>
            <MenuItem onClick={()=>{popupState.close(); navigate('/allfish')}}>All Fish</MenuItem>
            <MenuItem onClick={()=>{popupState.close(); navigate('/catchlist')}}>Catch List</MenuItem>
            <MenuItem onClick={()=>{popupState.close(); navigate('/caughtlist')}}>Caught List</MenuItem>
            <MenuItem onClick={()=>{popupState.close(); navigate('/donatelist')}}>Donate List</MenuItem>
          </Menu>
        </React.Fragment>
      )}
    </PopupState>
  );
}
