import React from 'react'

import User from './User';


import { Route, Routes } from 'react-router-dom'
import Product from './Product';
import Dashboard from './Dashboard';
import Order from './Order';
import Setting from './Setting';
import { Box } from '@mui/material';
import OrderForm from './OrderForm';
import Signin from './signin';



function Navigatebar() {
  return (
<Box flex={2}>

< Routes>
      <Route  path='/' element={<Dashboard/>} />
      <Route  path='/user' element={<User/>} />
      <Route  path='/product' element={<Product/>}/>
      <Route  path='/order' element={<Order/>}/>
      <Route  path='/setting' element={<Setting/>}/>
      <Route path="/SignIn" element={<Signin/>}/>

      <Route path='/orderform' element={<OrderForm/>}/>
  </Routes>
  </Box>
  )
}

export default Navigatebar