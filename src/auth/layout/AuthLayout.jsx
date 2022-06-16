import { Grid, Typography } from "@mui/material"

export const AuthLayout = () => {
  return (
    <Grid 
    container
    spacing={ 0 }
    direction='column'
    alignItems='center'
    justifyContent='center'
    sx={{ minHeight: '100vh', backgroundColor: 'primary.main', padding:4 }}
    >

        <Grid item
        className="box-shadow"
        xs={3}
        sx={{ backgroundColor: 'white', p:3, borderRadius: 3}}
        >
        <Typography variant="h5" sx={{mb:1}}>Login</Typography>

        </Grid>
    </Grid>
  )
}
