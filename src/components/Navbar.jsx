import { AppBar, Toolbar, Typography, Button, Switch, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const Navbar = () => {
  const { mode, toggleTheme } = useContext(ThemeContext);

  return (
    <AppBar position="static">
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        {/* Brand on left */}
        <Typography variant="h6" component="div">
          Loan Calculator
        </Typography>

        {/* Everything else on right */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Button color="inherit" component={Link} to="/">HOME</Button>
          <Button color="inherit" component={Link} to="/exchange">EXCHANGE RATES (LIVE)</Button>
          <Button color="inherit" component={Link} to="/about">ABOUT</Button>
          <Button color="inherit" component={Link} to="/error">ERROR PAGE</Button>

          {/* Theme toggle */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Typography variant="body2">
              {mode === 'light' ? 'Light Mode' : 'Dark Mode'}
            </Typography>
            <Switch checked={mode === 'dark'} onChange={toggleTheme} />
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
