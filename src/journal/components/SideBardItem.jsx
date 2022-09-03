import { useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { TurnedInNot } from '@mui/icons-material'
import { Grid, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import { setActiveNote } from '../../store/journal'

export const SideBardItem = ({ title = '', body, id, date, imageUrls = [] }) => {

    const { active:activeNote } = useSelector( state => state.journal)
    const dispatch = useDispatch();

    const newTitle = useMemo( () => {
        return title.length > 17
        ? title.substring(0,17) + '...'
        : title;
    }, [ title ])

    const onClickItem = ( event ) => {
        event.preventDefault();
        if ( !activeNote ) dispatch( setActiveNote( { id, title, body, date, imageUrls }));
        else if ( id !== activeNote.id ) {
            dispatch( setActiveNote( { id, title, body, date, imageUrls }));
            const fileInput = document.getElementById('fileInput');
        if ( !!fileInput )  fileInput.value = '';
        };
    }

  return (
    <ListItem key={ id } disablePadding>
        <ListItemButton onClick={ onClickItem } >
            <ListItemIcon>
                <TurnedInNot />
            </ListItemIcon>
            <Grid container direction='column'>
                <ListItemText primary= { newTitle } />
                <ListItemText secondary= { body } />
            </Grid>
        </ListItemButton>
    </ListItem>
  )
}
