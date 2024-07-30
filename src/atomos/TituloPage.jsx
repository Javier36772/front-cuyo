import React from 'react'
import { Typography,Box } from '@mui/material'
export default function TituloPage({titulo}) {
  return (
    <>
    <Typography variant='h2' sx={{textAlign:'center',mt:'1em'}}>
    {titulo}
    </Typography>
    </>
  )
}
