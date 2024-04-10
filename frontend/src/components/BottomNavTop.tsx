import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import DepartureBoardIcon from '@mui/icons-material/DepartureBoard';
import MyLocationIcon from '@mui/icons-material/MyLocation';
import AccessibleIcon from '@mui/icons-material/Accessible';
import { styled } from '@mui/material/styles';
import { Link } from '@mui/material';

const CustomBottomNavigationAction = styled(BottomNavigationAction)((theme) => ({
    borderRight: '1px solid rgba(0, 0, 0, 0.12)',
    borderLeft: '1px solid rgba(0, 0, 0, 0.12)',
    '&.Mui-selected': {
        color: '#005e3c',
        backgroundColor: '#f0f0f0',
    }
}));


const BottomNavBarTop = () => {
    return (
        <BottomNavigation style={{
            width: '100%',
            position: 'fixed',
            bottom: 0,
            borderTop: '1px solid rgba(0, 0, 0, 0.12)',
            display: 'flex',
            justifyContent: 'space-around',
        }}>
            <Link href="/timetable/1" style={{ display: 'flex' }}>
                <CustomBottomNavigationAction
                    label="Departure"
                    icon={<DepartureBoardIcon />}
                />
            </Link>
            <Link href="/my-location" style={{ display: 'flex' }}>
                <CustomBottomNavigationAction
                    label="My Location"
                    icon={<MyLocationIcon />}
                />
            </Link>
            <Link href="/accessibility" style={{ display: 'flex' }}>
                <CustomBottomNavigationAction
                    label="Accessibility"
                    icon={<AccessibleIcon />}
                />
            </Link>
        </BottomNavigation >
    );
}

export default BottomNavBarTop;
