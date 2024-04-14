import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import DepartureBoardIcon from '@mui/icons-material/DepartureBoard';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import ApartmentIcon from '@mui/icons-material/Apartment';
import AssistantDirectionIcon from '@mui/icons-material/AssistantDirection';

const CustomBottomNavigationAction = styled(BottomNavigationAction)((theme) => ({
    borderRight: '1px solid rgba(0, 0, 0, 0.12)',
    '&.Mui-selected': {
        color: '#005e3c',
        backgroundColor: '#f0f0f0',
    }
}));

interface BottomNavBarTopProps {
    checkpointId?: string;
}

const BottomNavBarBuildingDetail = ({ checkpointId }: BottomNavBarTopProps) => {
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
            <Link to={`/building/${checkpointId}`} style={{ display: 'flex', flexGrow: 1, textDecoration: 'none' }}>
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
