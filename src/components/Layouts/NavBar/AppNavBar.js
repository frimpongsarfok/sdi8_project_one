import * as React from 'react';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import { Grid } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';


import NavMenu from './Components/NavMenu';
import SearchResult from '../../Modules/SearchResults';
import { Link } from 'react-router-dom';
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: 'white',
  color:'black',
  '&:hover': {
    backgroundColor: 'white',
  },
  marginLeft: 0,
  marginRight: 'auto',
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '100ch',
      '&:focus': {
        width: '110ch',
      },
    },
  },
}));

export default function AppNavBar(props) {
 
  return (
    <Box sx={{ flexGrow: 4 }}>
      <AppBar position="static">
      
        <Toolbar sx={{backgroundColor:"black",color:'white'}}>
        <Grid container spacing={2}>
            <Grid item xs={12} md={3} >
            <Typography variant="h3">
              <Link to='/' style={{textDecoration:'none',color:'white'}}> ACFI <img alt='icon' width={80} height={40} src={process.env.PUBLIC_URL + '/icon.png'}/></Link>
            </Typography>
          </Grid>
          <Grid item xs={12} md={7} >
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              onChange={(event)=>{props.object.handleSearchChange(event.target.value)}}
             
            />
             
            </Search>
            </Grid>
            <Grid item xs={12} md={2} >
            <NavMenu/>
           </Grid>
          </Grid>
        </Toolbar>
        
        {props.object.state.searchResult.length?<Box ><SearchResult  object={props.object}></SearchResult></Box>:<></> }
      </AppBar>
    </Box>
  );
}
