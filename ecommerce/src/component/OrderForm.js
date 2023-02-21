import { Button, Card, CardContent, Grid, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, {  useState } from 'react'


// const useStyle = makeStyles(theme => ({
//   root:{
//     '& .MuiFormControl-root':{
//       width:"80%",
//       padding:theme.spacing(5),
//       margin:theme.spacing(1)
//     }
//   }
// }))


function OrderForm() {

  return (
    // <div>
      
    <Box flex={1} p={2} sx={{
      backgroundColor:'violet',
      alt:"",
      maxWidth: "1200", flexGrow: 1,
      maxHeight:"5000px"
    }
    } >
      

    <Typography   variant='h5' color={"white"} align='center'>Make an Order!</Typography>


    

    <Card style={{maxWidth:500, margin:"0 auto",padding:"20px 5px"}}>
      <CardContent>
        <Typography color={"textSecondary"} gutterBottom variant='body2' component={'p'}>Have an order*</Typography>
        <form>
      <Grid container spacing={1}>
        <Grid item xs={12} >
        <TextField  label="OrderNumber" variant="outlined"  fullWidth required />
        </Grid>
        <Grid item xs={12} sm={6}>
        <TextField type={"text"} label="CustomerId" variant="outlined" fullWidth required/>
        </Grid>
        <Grid item xs={12} sm={6}>
        <TextField type={"number"} label="ProductId" variant="outlined"  fullWidth required/>
        </Grid>
        <Grid item xs={12}>
        <TextField type={"number"} label="Quantity" variant="outlined"  fullWidth required/>
        </Grid>
        <Grid item xs={12}>
        <TextField type={"number"} label="ProductPrice" variant="outlined" fullWidth required/>
        </Grid>
        <Grid item xs={12}>
        <TextField type={"number"} label="Total" variant="outlined"  fullWidth required />
        </Grid>
        <Grid xs={12} item>
          <Button type="submit" variant="contained" color="primary"  fullWidth>Submit</Button>
        </Grid>
        
      </Grid>
      </form>
      </CardContent>
    </Card>
     
    </Box>

    // </div>
  )
}

export default OrderForm