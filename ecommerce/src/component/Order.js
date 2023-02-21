import { Button, Container, Typography } from '@mui/material'
import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import { Box } from '@mui/system';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';

const columns = [
  {field: 'id', headerName:'OrderMasteId'},
  {field: 'orderNumber', headerName:'OrderNumber'},
  {field: 'customerId', headerName:'customerId'},
  {field: 'productId', headerName:'productId'},
  {field: 'paymentMethod', headerName:'paymentMethod'},
  {field: 'quantity', headerName:'quantity'},
  {field: 'productPrice', headerName:'ProductPrice'},
  {field: 'total', headerName:'total'},

]

function Order() {
  const history= useNavigate();
  const [tableData, setTableData] = useState([])

  
  return (
    
    <Box bgcolor={"yellow"}>
      <Typography gutterBottom variant='h4' align='center'>
        Order Detail
      </Typography>
      <Box sx={{ display: 'flex',
          flexDirection: 'row-reverse',
          p: 1,
          m: 1,
          bgcolor: 'background.paper',
          borderRadius: 1,
 }}>  
      <Button variant="contained" startIcon={<AddIcon />} onClick={()=>history('/orderform')} color='error'>New Order</Button>
      </Box>
      
      
    </Box>
  )
}

export default Order