import { Container, Typography, Button, Box } from '@mui/material';

function App() {
  const handleLogin = () => {
    // TODO: integrate authentication
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ textAlign: 'center', mt: 8 }}>
        <Typography variant="h3" gutterBottom>
          Minglong's Music Club
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          A personal space for music, photography, and ideas.
        </Typography>
        <Button variant="contained" color="primary" onClick={handleLogin}>
          Login
        </Button>
      </Box>
    </Container>
  );
}

export default App;
