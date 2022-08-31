import { Button, Grid, TextField, Typography } from "@mui/material"
import { SaveOutlined } from "@mui/icons-material";
import { ImageGallery } from "../components";


export const Noteview = () => {
  return (
    <Grid 
    className="animate__animated animate__fadeIn animate__faster"
    container direction='row' justifyContent='space-between' alignItems='center' sx={{ mb: 1 }}>
        
        <Grid item>
            <Typography fontSize={ 39 } fontWeight= 'light'>28 de agosto, 2023</Typography>
        </Grid>

        <Grid item>
            <Button color="primary" sx={{ p: 1 }}>
                <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
                Guardar
            </Button>
        </Grid>

        <Grid container>
            <TextField 
                type='text'
                variant='filled'
                fullWidth
                placeholder="Ingrese un título"
                label='Título'
                sx={{ border: 'note', mb: 1 }}
            />
            <TextField 
                type='text'
                variant='filled'
                fullWidth
                multiline
                placeholder="¿Qué sucedió hoy?"
                label='Título'
                minRows={ 5 }
            />
        </Grid>

        {/* Image */}
        <ImageGallery />

    </Grid>
  )
}
