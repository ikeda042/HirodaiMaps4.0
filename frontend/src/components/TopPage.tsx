import { Box } from '@mui/system';
import { BuildingCard } from './BuildingCard';
import { NavBar } from './Navbar';
import BottomNavBar from './BottomNavTop';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import { useState } from 'react';
import { useEffect } from 'react';
import { Typography } from '@mui/material';
import buildings from './BuildingData';
import { useParams } from 'react-router-dom';
import qridDict from './QRidDict';

type Building = {
    buildingId: string;
    title: string;
    description: string;
    imageUrl: string;
    keywords: string[];
    tag: string;
    mapCoordinate: string;
    lat: string;
    lon: string;
};

export const TopPage = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredBuildings, setFilteredBuildings] = useState<Building[]>([]);
    const { checkpointId: rawCheckpointId } = useParams<{ checkpointId?: string }>();
    const checkpointId = rawCheckpointId || '0';

    const handleSearch = (query: string) => {
        setSearchQuery(query);
    };

    useEffect(() => {
        let filtered;
        if (searchQuery) {
            filtered = buildings.filter(building =>
                building.keywords.some(keyword =>
                    keyword.toLowerCase().includes(searchQuery.toLowerCase())
                )
            );
        } else {
            filtered = buildings.filter(building => building.tag === "faculty");
        }
        setFilteredBuildings(filtered);
    }, [searchQuery]);


    return (
        <>
            <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: '#FFFFFF', margin: 0, padding: 0 }}>
                <NavBar />
                <Box sx={{ marginTop: '64px', marginBottom: '64px' }}>
                    <Box sx={{ border: '1px solid', padding: '10px', marginBottom: '20px', borderRadius: "2%", margin: "7px" }}>
                        {checkpointId !== '0' && <Typography variant="body1">
                            現在地は<b>{checkpointId ? qridDict[checkpointId] : '未定義'}</b>です。検索バーで目的地の建物名を入力して、建物を選択してください。<br></br>
                            (例：文学部、学生プラザ、工学部支援室 など)
                        </Typography>}
                        {checkpointId === '0' && <Typography variant="body1">検索バーで目的地の建物名を入力して、建物を選択してください。<br></br>
                            (例：文学部、学生プラザ、工学部支援室 など)</Typography>}
                    </Box>
                    <SearchBar onSearch={handleSearch} />
                    {filteredBuildings.map((building, i) => (
                        <Link to={`/building/${building.buildingId}`} style={{ textDecoration: 'none' }}>
                            <BuildingCard key={i} imageUrl={"/building1.jpg"} title={building.title} />
                        </Link>
                    ))}
                </Box>
                <BottomNavBar />
            </Box >
        </>
    );

};
