import { useMemo, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Button, Grid, IconButton, TextField, Typography } from "@mui/material"
import { DeleteOutline, SaveOutlined, UploadOutlined } from "@mui/icons-material";
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css'

import { ImageGallery } from "../components";
import { useForm } from "../../hooks/useForm";
import { setActiveNote, startDeletingNote, startSavingNote, startUploadingFiles } from "../../store/journal";


export const Noteview = () => {

    const dispatch = useDispatch();
    const { active: note, savedMessage, isSaving } = useSelector( state => state.journal );
    const { body, title, date, onInputChange, formState } = useForm( note );

    const dateString = useMemo(() => {
        const newDate = new Date( date );
        return newDate.toUTCString();
    }, [date]);
    
    const fileInputRef = useRef()

    useEffect(() => {
        dispatch( setActiveNote(formState) );
    }, [formState]);

    useEffect(() => {

        if ( savedMessage.length > 0 ) {
            Swal.fire( 'Nota actualizada', savedMessage, 'success' );
        }

    }, [savedMessage])

    const onSaveNote = () => {
        dispatch ( startSavingNote() );
    }

    const onFileInputChange = ({ target }) => {
        if ( target.files === 0 ) return;

        dispatch( startUploadingFiles( target.files ) );
    }

    const onDelete = () => {
        dispatch( startDeletingNote() );
    }

  return (
    <Grid 
    className="animate__animated animate__fadeIn animate__faster"
    container direction='row' justifyContent='space-between' alignItems='center' sx={{ mb: 1 }}>
        
        <Grid item>
            <Typography fontSize={ 39 } fontWeight= 'light'>{ dateString }</Typography>
        </Grid>

        <Grid item>

            <input
                id="fileInput" 
                type="file" multiple
                onChange={ onFileInputChange }
                style={{ display: 'none' }}
                ref={ fileInputRef }
            />

            <IconButton
                color="primary"
                disabled={isSaving}
                onClick={ () => fileInputRef.current.click() }
            >
                <UploadOutlined />
            </IconButton>

            <Button 
                disabled= { isSaving }
                onClick={ onSaveNote }
                color="primary" 
                sx={{ p: 1 }}
            >
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
                name='title'
                value={ title }
                onChange={ onInputChange }
            />
            <TextField 
                type='text'
                variant='filled'
                fullWidth
                multiline
                placeholder="¿Qué sucedió hoy?"
                // label='¿Qué sucedió hoy?'
                minRows={ 5 }
                name='body'
                value={ body }
                onChange={ onInputChange }
            />
        </Grid>

        <Grid container justifyContent='end'>
            <Button
                onClick={ onDelete }
                sx = {{ mt:2 }}
                color = 'error'
            >
                <DeleteOutline />
                Borrar
            </Button>

        </Grid>

        {/* Image Gallery */}
        <ImageGallery images = { note.imageUrls } />

    </Grid>
  )
}
