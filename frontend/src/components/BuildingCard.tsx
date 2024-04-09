import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


export const BuildingCard = () => {

    return (
        <div style={{ margin: '0 1%' }}>
            <Card sx={{
                width: '100%',
                height: "90px",
                display: 'flex',
                alignItems: 'center',
                margin: '0.5% auto',
                borderRadius: "10px"
            }}>
                <CardMedia
                    component="img"
                    sx={{
                        width: 100,
                        height: 75,
                        padding: '2%',
                        alignSelf: 'center',
                        borderRadius: '20%',
                    }}
                    image={"building1.jpg"}
                    alt="Building Image"
                />
                <CardContent sx={{ flex: 1 }}>
                    <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            height: '100%'
                        }}
                    >
                        title2333
                    </Typography>
                </CardContent>
            </Card>
        </div>
    );
}

export default BuildingCard;
