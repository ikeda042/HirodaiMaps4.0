import './App.css';
import { NavBar } from './components/Navbar';
import BottomNavBar from './components/BottomNav';
import Box from '@mui/material/Box';
import BuildingCard from './components/BuildingCard';

function App() {
  return (
    <Box sx={{ backgroundColor: '#FFFFFF', margin: 0, padding: 0 }}>
      <NavBar />
      <Box sx={{ marginTop: '64px', marginBottom: '64px' }}>
        {Array.from({ length: 10 }, (_, i) => (
          <BuildingCard key={i} imageUrl='building1.jpg' title={`title${i + 1}`} />
        ))}
      </Box>
      <BottomNavBar />
    </Box >
  );
}

export default App;
