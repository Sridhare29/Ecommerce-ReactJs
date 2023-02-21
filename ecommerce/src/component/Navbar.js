import { AppBar, Avatar, Badge, InputBase, Menu, MenuItem, styled, Toolbar, Typography } from '@mui/material'
import React, { useState } from 'react'
import {  Notifications } from '@mui/icons-material';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';

const StyledToolbar = styled(Toolbar)({
  backgroundColor: "white",
  display:"flex",
  justifyContent:"space-between"
});

const Search = styled("div")(({theme})=>({
  backgroundColor:"white",
  padding:"0 10px",
  borderRadius: theme.shape.borderRadius,
  width:"40%"
}));

const SearchIcon = styled("div")(({theme})=>({
    display:"none",
    alignItems:"center",
    gap:"20px",
    [theme.breakpoints.up("sm")]:{
      display: "flex"
    }
}));
  const UserBox=styled("Box")(({theme})=>({
    display:"flex",
    alignItems:"center",
    gap:"10px",
      [theme.breakpoints.up("sm")]:{
        display: "none"
      }
  }));
const Navbar=()=> {

  const[open, setOpen]=useState(false)
  return (
    <AppBar position="sticky">
      
      <StyledToolbar variant="dense">
       <Toolbar>
      <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
      <MenuIcon />
      </IconButton>

        <Typography variant="h6" color="Black" sx={{display:{xs:"none",sm:"block"}}}>Image</Typography>
        </Toolbar>
        {/* <CenterFocusStrongIcon sx={{display:{xs:"block",sm:"none"}}}/> */}
        <Search><InputBase placeholder='Search'/></Search>
        {/* <Link to='#' className='menubar'><MenuIcon sx={{display:{xs:"true",sm:"none"}}}/></Link> */}
        <SearchIcon>
        
        <Badge badgeContent={2} color="error">
          <Notifications  color="action" />
        </Badge>
        <Avatar sx={{width:30,height:30}} onClick={e=>setOpen(true)}/>
        </SearchIcon>

        <UserBox onClick={e=>setOpen(true)}>
        <Avatar variant='span'/>
        <Typography variant='span'>Sridhar</Typography>
        </UserBox>

      </StyledToolbar>
         
    

    </AppBar>
  )
}

export default Navbar