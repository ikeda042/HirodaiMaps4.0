import './App.css';
import { NavBar } from './components/Navbar';
import BottomNavBar from './components/BottomNav';
import Box from '@mui/material/Box';

function App() {
  return (
    <Box sx={{ backgroundColor: '#FFFFFF', minHeight: '100vh' }}>
      <NavBar />
      <BottomNavBar />
    </Box>
  );
}

export default App;
