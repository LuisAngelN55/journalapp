import { useMemo } from 'react'
import { TurnedInNot } from '@mui/icons-material'
import { Grid, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'

export const SideBardItem = ({ title, body, id }) => {

    const newTitle = useMemo( () => {
        return title.length > 17
        ? title.substring(0,17) + '...'
        : title;
    }, [ title ])

  return (
    <ListItem key={ id } disablePadding>
        <ListItemButton>
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
