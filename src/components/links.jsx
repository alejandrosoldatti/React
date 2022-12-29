import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CastleIcon from '@mui/icons-material/Castle';
// import LocationOnIcon from '@mui/icons-material/LocationOn';

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);

  return (
    <Box sx={{ width: 500 }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Recientes" icon={<RestoreIcon />} />
        <BottomNavigationAction label="Favoritos" icon={<FavoriteIcon />} />
        <BottomNavigationAction label="locales" icon={<CastleIcon />} />
      </BottomNavigation>
    </Box>
  );
}