import { useMemo } from 'react'
import { useDispatch } from 'react-redux'
import { TurnedInNot } from '@mui/icons-material'
import { Grid, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import { setActiveNote } from '../../store/journal'

export const SideBardItem = ({ title = '', body, id, date, imageUrls = [] }) => {

    const dispatch = useDispatch();

    const newTitle = useMemo( () => {
        return title.length > 17
        ? title.substring(0,17) + '...'
        : title;
    }, [ title ])

    const onClickItem = ( event ) => {
        event.preventDefault();
        dispatch( setActiveNote({ id, title, body, date, imageUrls }) );
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
