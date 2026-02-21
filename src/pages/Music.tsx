import { Container, Typography, Grid, Card, CardContent, Box } from '@mui/material';
import { motion } from 'framer-motion';
import { musicItems } from '../data/content';

export default function Music() {
  return (
    <Box sx={{ minHeight: '100vh', py: 8, position: 'relative', background: 'linear-gradient(180deg, #0a0a0f 0%, #12121a 100%)' }}>
      <Box sx={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: 600, height: 600, background: 'radial-gradient(circle, rgba(139,92,246,0.15) 0%, transparent 70%)', filter: 'blur(60px)', pointerEvents: 'none' }} />
      <Box sx={{ position: 'absolute', bottom: '10%', right: '5%', width: 300, height: 300, background: 'radial-gradient(circle, rgba(159,18,57,0.12) 0%, transparent 70%)', filter: 'blur(50px)', pointerEvents: 'none' }} />
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <Typography variant="overline" sx={{ color: 'primary.main', letterSpacing: 4 }}>Collection</Typography>
          <Typography variant="h2" sx={{ mb: 1, fontWeight: 700 }}>Music</Typography>
          <Box sx={{ width: 60, height: 2, background: 'linear-gradient(90deg, #8b5cf6, #9f1239)', mb: 5 }} />
        </motion.div>
        <Grid container spacing={4}>
          {musicItems.map((item, i) => (
            <Grid size={{ xs: 12, md: 6 }} key={item.id}>
              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 + i * 0.15, duration: 0.6 }} whileHover={{ y: -8 }}>
                <Card sx={{ bgcolor: 'rgba(18,18,26,0.8)', backdropFilter: 'blur(10px)', border: '1px solid rgba(139,92,246,0.15)', borderRadius: 3, overflow: 'hidden', transition: 'all 0.3s', '&:hover': { borderColor: 'rgba(139,92,246,0.5)', boxShadow: '0 20px 40px rgba(0,0,0,0.4)' } }}>
                  <Box sx={{ position: 'relative', paddingTop: '56.25%', '&::after': { content: '""', position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent 60%, rgba(0,0,0,0.8) 100%)', pointerEvents: 'none' } }}>
                    <iframe src={item.videoUrl} title={item.title} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                  </Box>
                  <CardContent sx={{ p: 3 }}>
                    <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>{item.title}</Typography>
                    <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.6)', mb: 1 }}>{item.description}</Typography>
                    <Typography variant="caption" sx={{ color: 'primary.main' }}>{item.date}</Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
