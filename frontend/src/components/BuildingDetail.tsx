
import { useParams } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { NavBar } from './Navbar';
import BottomNavBar from './BottomNav';
import Box from '@mui/material/Box';


function BuildingDetail() {
    const { buildingId } = useParams();

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '70vh' }}>
            <NavBar />
            <Card sx={{ maxWidth: '90%', width: '100%', maxHeight: 290, margin: 'auto' }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="200"
                        image={`/building1.jpg`}
                        alt={"ALT"}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            id = {buildingId}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {"説明:id" + buildingId}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
            <BottomNavBar />
        </Box >
    );

}

export default BuildingDetail;
