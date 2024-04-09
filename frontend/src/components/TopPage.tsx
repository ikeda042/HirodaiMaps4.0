import React from 'react';
import { Box } from '@mui/system';
import { BuildingCard } from './BuildingCard';
import { NavBar } from './Navbar';
import BottomNavBar from './BottomNav';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import { useState } from 'react';
import { useEffect } from 'react';
import buildings from './BuildingData';

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
            <Box sx={{ backgroundColor: '#FFFFFF', margin: 0, padding: 0 }}>
                <NavBar />
                <Box sx={{ marginTop: '64px', marginBottom: '64px' }}>
                    <SearchBar onSearch={handleSearch} />
                    {Array.from({ length: 10 }, (_, i) => (
                        <Link to={`/building/${i + 1}`} style={{ textDecoration: 'none' }}>
                            <BuildingCard key={i} imageUrl='building1.jpg' title={`title${i + 1}`} />
                        </Link>
                    ))}
                </Box>
                <BottomNavBar />
            </Box >
        </>
    );

};
