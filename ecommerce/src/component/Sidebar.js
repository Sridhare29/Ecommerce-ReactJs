import { Box, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import React from 'react'
import DashboardIcon from '@mui/icons-material/Dashboard';
import { useNavigate } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import SettingsIcon from '@mui/icons-material/Settings';

const Sidebar = () => {
  const style = {
    width: '100%',
    maxWidth: 360,
  };
  const history= useNavigate(style);
  return (
    <Box  bgcolor={"white"} flex={0.10} p={4} mi sx={{display:{xs: "none", sm:"block"}}}>
    
    <List p={5} disablePadding={true}>
          <ListItem disablePadding>
            <ListItemButton onClick={()=>history('/')}>
              <ListItemIcon>
                <DashboardIcon/>
              </ListItemIcon>
              <ListItemText secondary="DashBoard" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={()=>history('/product')}>
              <ListItemIcon>
                <ShoppingCartIcon/>
              </ListItemIcon>
              <ListItemText secondary="Product" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={()=>history('/user')}>
              <ListItemIcon>
                <PeopleIcon/>
              </ListItemIcon>
              <ListItemText secondary="Customer" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={()=>history('/order')}>
              <ListItemIcon>
                <ShoppingBagIcon/>
              </ListItemIcon>
              <ListItemText secondary="order" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={()=>history('/setting')}>
              <ListItemIcon>
                <SettingsIcon/>
              </ListItemIcon >
              <ListItemText secondary="Setting"/>
            </ListItemButton>
          </ListItem>
          <Divider />
          
          {/* <ListItem disablePadding>
           
          </ListItem>
          <ListItem disablePadding>
            
          </ListItem>
          <ListItem disablePadding>
            
          </ListItem>
          <ListItem disablePadding>
            
          </ListItem>
          <ListItem disablePadding>
            
          </ListItem>
     */}
    
</List>
    
      

    </Box>

  )
}

export default Sidebar