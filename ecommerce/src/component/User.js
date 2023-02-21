import { Box, Typography } from '@mui/material'
import React from 'react'

function User() {
  return (
    <Box bgcolor={"yellow"} flex={1} p={2}>
      <Typography gutterBottom variant='h4' align='center'>
        User
      </Typography>
    </Box>
  )
}

export default User