import { NavBar } from "./Navbar";
import { Box } from "@mui/system";
import BottomNavTT from "./BottomNavTT";
import { useParams } from "react-router-dom";
import { Stack } from "@mui/material";
import Paths from "./Paths";

const Path = () => {

    const { pathId } = useParams<{ pathId: string }>();
    const height = window.innerHeight - 140;
    const width = window.innerWidth * 0.91;

    const path = Paths.find(p => p.path_id === pathId);
    const lat = path ? path.lat : "";
    const lon = path ? path.lon : "";
    const path_key = path ? path.path_key : "";

    return (
        <>
            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <Stack spacing={9} alignItems="center" sx={{ width: '100%', maxWidth: '90%', margin: 'auto', mt: "10px" }}>
                    <NavBar />
                    <Box sx={{ width: '100%', maxWidth: '98%', }}>
                        <iframe
                            id="mapIframe"
                            src={`/routes/${path_key}/map.html?lat=${lat}&lon=${lon}`}
                            title="Map"
                            style={{ width: width, height: height, padding: '0', margin: '0' }}
                        ></iframe>
                    </Box>
                    <BottomNavTT />
                </Stack>
            </Box>
        </>
    );
}

export default Path;
