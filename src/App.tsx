import { ThemeProvider, CssBaseline, Box } from '@mui/material';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { darkTheme } from './theme/theme';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Music from './pages/Music';
import Photography from './pages/Photography';
import Projects from './pages/Projects';

export default function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <BrowserRouter>
        <Box sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/music" element={<Music />} />
            <Route path="/photography" element={<Photography />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </Box>
      </BrowserRouter>
    </ThemeProvider>
  );
}
