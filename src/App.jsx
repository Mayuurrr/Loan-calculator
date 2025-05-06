import { Outlet } from 'react-router-dom';
import { CssBaseline, Container } from '@mui/material';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <>
      <CssBaseline />
      <Navbar />
      <Container maxWidth="lg" sx={{ pt: 4 }}>
        <Outlet />
      </Container>
    </>
  );
};

export default App;
