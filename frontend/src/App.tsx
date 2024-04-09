import './App.css';
import { NavBar } from './components/Navbar';
import BottomNavBar from './components/BottomNav';
import Box from '@mui/material/Box';
import BuildingCard from './components/BuildingCard';

function App() {
  return (
    <Box sx={{ backgroundColor: '#FFFFFF', margin: 0, padding: 0 }}>
      <NavBar />
      <Box sx={{ marginTop: '64px' }}>
        <BuildingCard imageUrl='building1.jpg' title='title1' />
        <BuildingCard imageUrl='building1.jpg' title='title2' />
      </Box>
      <BottomNavBar />
    </Box >
  );
}

export default App;
