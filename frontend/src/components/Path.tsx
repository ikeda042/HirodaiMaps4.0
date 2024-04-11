import { NavBar } from "./Navbar";
import { Box } from "@mui/system";
import BottomNavTT from "./BottomNavTT";
import { useParams } from "react-router-dom";
import { Stack } from "@mui/material";


const Path = () => {

    const { dir, lat, lon } = useParams<{ dir: string, lat: string, lon: string }>();
    const height = window.innerHeight - 140;

    return (
        <>
            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <Stack spacing={9} alignItems="center" sx={{ width: '100%', maxWidth: '90%', margin: 'auto', mt: "10px" }}>
                    <NavBar />
                    <Box sx={{ width: '100%', maxWidth: '98%', }}>
                        <iframe
                            id="mapIframe"
                            src={`/routes/${dir}/index.html?lat=${lat}&lon=${lon}`}
                            title="Map"
                            style={{ width: '100%', height: height, padding: '0', margin: '0' }}
                        ></iframe>
                    </Box>
                    <BottomNavTT />
                </Stack>
            </Box>
        </>
    );
}

export default Path;
