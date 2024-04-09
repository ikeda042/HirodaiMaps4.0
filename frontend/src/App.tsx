import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { TopPage } from './components/TopPage';
import BuildingDetail from './components/BuildingDetail';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <TopPage />
        } />
        <Route path="/building/:buildingId" element={
          <BuildingDetail />
        } />
      </Routes>
    </Router >
  );
}

export default App;
