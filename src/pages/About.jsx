import { Box, Typography, Divider, List, ListItem, ListItemText } from '@mui/material';

const About = () => {
  return (
    <Box sx={{ maxWidth: 900, mx: 'auto', p: 3 }}>
      <Typography variant="h4" gutterBottom>
        About This Application
      </Typography>

      <Typography variant="body1" paragraph>
        This Loan Calculator App is a modern, responsive web application built using
        <strong> React JS</strong> and <strong>Material UI</strong>. It allows users to estimate
        monthly loan payments (EMI), view a detailed amortization schedule, and convert the EMI into
        various currencies using real-time exchange rates.
      </Typography>

      <Divider sx={{ my: 3 }} />

      <Typography variant="h5" gutterBottom>
        🎯 Core Features
      </Typography>
      <List>
        <ListItem>
          <ListItemText primary="EMI Calculation using standard financial formulas" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Monthly amortization schedule with principal, interest, and balance breakdown" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Real-time currency conversion using ExchangeRate API" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Dark/Light mode toggle for personalized user experience" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Responsive design for desktop and mobile views" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Graceful error handling with a fallback error page and 404 routing" />
        </ListItem>
      </List>

      <Divider sx={{ my: 3 }} />

      <Typography variant="h5" gutterBottom>
        🧱 Technologies Used
      </Typography>
      <List>
        <ListItem>
          <ListItemText primary="React with functional components and hooks" />
        </ListItem>
        <ListItem>
          <ListItemText primary="React Router for navigation and routing" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Material UI for component styling and theming" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Axios for making HTTP requests" />
        </ListItem>
        <ListItem>
          <ListItemText primary="ExchangeRate-API for live currency rates" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Context API for global state (theme and currency)" />
        </ListItem>
      </List>

      <Divider sx={{ my: 3 }} />

      <Typography variant="body2" color="textSecondary" align="center">
        © {new Date().getFullYear()} Loan Calculator. All rights reserved.
      </Typography>
    </Box>
  );
};

export default About;
