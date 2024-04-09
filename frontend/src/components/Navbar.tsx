import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import QrCodeIcon from '@mui/icons-material/QrCode';

export const NavBar = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{ backgroundColor: '#005e3c', position: "fixed" }}>
                <Toolbar>
                    <Box>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', fontFamily: "Helvetica", fontSize: '1.7rem' }}>
                            HirodaiMaps
                            <QrCodeIcon />
                        </Typography>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
