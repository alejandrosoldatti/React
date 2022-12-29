import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import CartWidget from './CartWidget';
import SimpleBottomNavigation from './links';

export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            MyappReact
          </Typography>
          <div style={{margin:"0px 200px"}}>
            <SimpleBottomNavigation></SimpleBottomNavigation>
        </div>
          <div>
            <h3>7</h3>
          <CartWidget></CartWidget>
          </div>
          
         
        </Toolbar>
      </AppBar>
    </Box>
  );
}