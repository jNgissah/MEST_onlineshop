import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Menu from '@mui/icons-material/Menu';




export default function TemporaryDrawer() {
    const [state, setState] = React.useState({
       
        left: false,
       
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                {['NEW ARRIVAL', 'MEN', 'WOMEN', 'TRAVEL', 'CART'].map((text, index) => (
                    <ListItem button key={text}>
                        
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {['SignIn', 'SignUp'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <div>
            {['left'].map((anchor) => (
                <React.Fragment key={anchor}>
                    <Button style={{ color: "white", marginRight: "10%" }} onClick={toggleDrawer(anchor, true)}><Menu /></Button>
                    
                    <Drawer
                        anchor={anchor}
                        open={state[anchor]}
                        onClose={toggleDrawer(anchor, false)}
                    >
                        {list(anchor)}
                    </Drawer>
                    
                </React.Fragment>
            ))}
        </div>
    );
}
