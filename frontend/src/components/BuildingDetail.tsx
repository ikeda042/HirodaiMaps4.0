
import { useParams } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { NavBar } from './Navbar';
import Box from '@mui/material/Box';
import Map from './Map';
import buildings from './BuildingData';
import BottomNavBarBuildingDetail from './BottomNavBuildingDetail';


const BuildingDetail = () => {
    const { buildingId } = useParams();
    const building = buildings.find(b => b.buildingId === buildingId);

    return (
        <>
            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '70vh' }}>
                <NavBar checkpointId={buildingId} />
                <Card sx={{ maxWidth: '90%', width: '100%', maxHeight: 290, margin: 'auto' }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="200"
                            image={`${building?.imageUrl}`}
                            alt={"ALT"}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {building?.title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {building?.description}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Box >
            <Box sx={{ width: '100%', maxWidth: '90%', aspectRatio: '1', margin: 'auto', mb: "100px" }}>
                <Map lat={`${building?.lat}`} lon={`${building?.lon}`} title={`${building?.title}`} />
            </Box>
            <BottomNavBarBuildingDetail checkpointId={buildingId} />
        </>
    );

}

export default BuildingDetail;

