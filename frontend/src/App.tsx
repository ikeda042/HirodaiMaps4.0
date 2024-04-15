import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { TopPage } from './components/TopPage';
import BuildingDetail from './components/BuildingDetail';
import TimeTable from './components/TimeTable';
import Path from './components/Path';
import CheckpointDetail from './components/CheckpointDetail';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <TopPage />
        } />
        <Route path="/:checkpointId" element={
          <TopPage />
        } />
        <Route path="/building/:buildingId/:checkpointId" element={
          <BuildingDetail />
        } />
        <Route path="/timetable/:stopId/:checkpointId" element={
          <TimeTable />
        } />
        <Route path="/paths/:pathId" element={
          < Path />
        } />
        <Route path="/checkpoint/:checkpointId" element={
          <CheckpointDetail />
        } />
      </Routes>
    </Router >
  );
}

export default App;
