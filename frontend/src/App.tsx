import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { TopPage } from './components/TopPage';
import BuildingDetail from './components/BuildingDetail';
import TimeTable from './components/TimeTable';
import Path from './components/Path';

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
        <Route path="/timetable/:stopId" element={
          <TimeTable />
        } />
        <Route path="/paths/:pathId" element={
          < Path />
        } />
      </Routes>
    </Router >
  );
}

export default App;
