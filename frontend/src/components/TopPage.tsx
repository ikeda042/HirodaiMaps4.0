import React from 'react';
import { Box } from '@mui/system';
import { BuildingCard } from './BuildingCard';
import { NavBar } from './Navbar';
import BottomNavBar from './BottomNav';
import { Link } from 'react-router-dom';



export const TopPage = () => {

    return (
        <>
            <Box sx={{ backgroundColor: '#FFFFFF', margin: 0, padding: 0 }}>
                <NavBar />
                <Box sx={{ marginTop: '64px', marginBottom: '64px' }}>
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
