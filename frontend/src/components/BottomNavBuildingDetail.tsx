import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import DepartureBoardIcon from '@mui/icons-material/DepartureBoard';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import ApartmentIcon from '@mui/icons-material/Apartment';
import AssistantDirectionIcon from '@mui/icons-material/AssistantDirection';
import Paths from './Paths';

function getPathId(Paths: any[], path_key: string) {
    const path = Paths.find(p => p.path_key === path_key);
    return path ? path.path_id : null;
}

const CustomBottomNavigationAction = styled(BottomNavigationAction)((theme) => ({
    borderRight: '1px solid rgba(0, 0, 0, 0.12)',
    '&.Mui-selected': {
        color: '#005e3c',
        backgroundColor: '#f0f0f0',
    }
}));

interface BottomNavBarTopProps {
    checkpointId?: string;
    startKey?: string;
    endKey?: string;
}

const BottomNavBarBuildingDetail = ({ checkpointId,startKey,endKey}: BottomNavBarTopProps) => {
    const pathKey = startKey + "_" + endKey;
    const path_id = getPathId(Paths, pathKey);

    return (
        <BottomNavigation style={{
            width: '100%',
            position: 'fixed',
            bottom: 0,
            borderTop: '1px solid rgba(0, 0, 0, 0.12)',
            display: 'flex',
            justifyContent: 'space-around',
        }}>
            <Link to={`/${checkpointId}`} style={{ display: 'flex', flexGrow: 1, textDecoration: 'none' }}>
                <CustomBottomNavigationAction
                    label="建物リスト"
                    icon={<ApartmentIcon />}
                    showLabel={true}
                />
            </Link>
            <Link to={`/paths/${path_id ?? ""}`} style={{ display: 'flex', flexGrow: 1, textDecoration: 'none' }}>
                <CustomBottomNavigationAction
                    label="経路を表示"
                    icon={<AssistantDirectionIcon />}
                    showLabel={true}
                />
            </Link>
            <Link to={`/timetable/1/${checkpointId}`} style={{ display: 'flex', flexGrow: 1, textDecoration: 'none' }}>
                <CustomBottomNavigationAction
                    label="時刻表"
                    icon={<DepartureBoardIcon />}
                    showLabel={true}
                />
            </Link>
        </BottomNavigation >
    );
}

export default BottomNavBarBuildingDetail;
