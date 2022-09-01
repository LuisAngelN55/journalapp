import { useSelector } from 'react-redux';
import { Box, Divider, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from "@mui/material";
import { TurnedInNot } from "@mui/icons-material";
import { SideBardItem } from './SideBardItem';

export const SideBar = ({ drawerWidth = 280 }) => {

    const { displayName } = useSelector( state => state.auth );
    const { notes } = useSelector( state => state.journal );

  return (
    <Box
        component='nav'
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
    >

    <Drawer
        variant="permanent"
        open
        // PaperProps={{
        //     sx: { width: "240px" },
        //   }}
        sx={{
            display: { xs: 'block'}, width: '1000px',
            '& .MuiDrawer-paper': {
                boxSizing: 'border-box',
                width: drawerWidth
            }
        }}
    >

        <Toolbar>
            <Typography variant="h6" noWrap>{ displayName }</Typography>
        </Toolbar>
        <Divider />

        <List>
            {
                notes.map( note => (
                    <SideBardItem key={ note.id } { ...note } />
                ))
            }
        </List>

    </Drawer>

    </Box>
  )
}
