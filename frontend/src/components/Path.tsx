import { NavBar } from "./Navbar";
import { Box } from "@mui/system";
import BottomNavTT from "./BottomNavTT";
import { useParams } from "react-router-dom";


const Path = () => {

    const { dir, lat, lon } = useParams<{ dir: string, lat: string, lon: string }>();

    const height = window.innerHeight - 140;

    return (
        <>
            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '71vh' }}>
                <NavBar />
                <Box sx={{ width: '100%', maxWidth: '90%', aspectRatio: '1', margin: 'auto', mb: "100px" }}>
                    <iframe
                        id="mapIframe"
                        src={`/routes/${dir}/index.html?lat=${lat}&lon=${lon}`}
                        title="Map"
                        style={{ width: '100%', height: height, padding: '0', margin: '0' }}
                    ></iframe>
                </Box>
                <BottomNavTT />
            </Box>
        </>
    );
}

export default Path;
