import { createTheme } from '@mui/material/styles';

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: '#8b5cf6' },
    secondary: { main: '#06b6d4' },
    error: { main: '#9f1239' }, // wine red
    background: { default: '#0a0a0f', paper: '#12121a' },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", sans-serif',
    h1: { fontWeight: 700 },
    h2: { fontWeight: 600 },
  },
});
