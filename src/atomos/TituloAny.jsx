import { Typography } from "@mui/material"
export default function TituloAny({tituloAny}) {
  return (
    <>
    <Typography variant="h3" sx={{textAlign:'center',mt:'1em',mb:'1em'}}>
    {tituloAny}
    </Typography>
    </>
  )
}
