import { Box, Divider, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from "@mui/material";
import { TurnedInNot } from "@mui/icons-material";

export const SideBar = ({ drawerWidth = 280 }) => {
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
            <Typography variant="h6" noWrap>Luis Naranjo</Typography>
        </Toolbar>
        <Divider />

        <List>
            {
                ['Enero', 'Febrero', 'Marzo', 'Abril'].map( text => (
                    <ListItem key={ text } disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <TurnedInNot />
                            </ListItemIcon>
                            <Grid container direction='column'>
                                <ListItemText primary= { text } />
                                <ListItemText secondary= 'Lorem ipsum dolor' />
                            </Grid>
                        </ListItemButton>
                    </ListItem>
                ))
            }
        </List>

    </Drawer>

    </Box>
  )
}
