import React from 'react';
import { useParams } from 'react-router-dom';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Button } from '@mui/material';
import DirectionsWalkIcon from '@mui/icons-material/DirectionsWalk';
import NavigationIcon from '@mui/icons-material/Navigation';
import AccessibleIcon from '@mui/icons-material/Accessible';
import { styled } from '@mui/material/styles';
import { NavBar } from './Navbar';


import BottomNavBar from './BottomNav';
import Box from '@mui/material/Box';
import BuildingCard from './BuildingCard';


function BuildingDetail() {
    const { buildingId } = useParams();

    return (
        <Box sx={{ backgroundColor: '#FFFFFF', margin: 0, padding: 0 }}>
            <NavBar />
            <Card sx={{ maxWidth: 350, maxHeight: 290 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="200"
                        image={`/?w=200&h=200&fit=crop&auto=format`}
                        alt={"ALT"}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {"TITLE"}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {"desc."}。
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
            <BottomNavBar />
        </Box >
    );


    // return (
    //     <div>
    //         <div style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000 }}>
    //             <ButtonAppBar headerText={detailData.headerText} checkpointID={checkpointID} />
    //         </div>
    //         <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '17%' }}>
    // <Card sx={{ maxWidth: 350, maxHeight: 290 }}> {/* maxHeightを追加 */}
    //     <CardActionArea>
    //         <CardMedia
    //             component="img"
    //             height="200"
    //             image={`/${buildingDetail.imageUrl}?w=200&h=200&fit=crop&auto=format`}
    //             alt={buildingDetail.title}
    //         />
    //         <CardContent>
    //             <Typography gutterBottom variant="h5" component="div">
    //                 {buildingDetail.title}
    //             </Typography>
    //             <Typography variant="body2" color="text.secondary">
    //                 {buildingDetail.title + buildingDetail.buildingId}。
    //             </Typography>
    //         </CardContent>
    //     </CardActionArea>
    // </Card>
    //             <iframe
    //                 id="mapIframe"
    //                 src={"/map/map.html" + `?lat=${lat_query}&lon=${lon_query}&title=${title}`}
    //                 style={{ height: '350px', width: '350px', border: '2px solid black', marginTop: '20px', marginBottom: '90px' }}
    //                 title="Map"
    //             ></iframe>
    //         </div>
    //         <BottomNavDetailPage qrid={QRID} buildingId={buildingDetail.buildingId} />
    //     </div>
    // );
}

export default BuildingDetail;

