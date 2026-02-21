import { Box, Container, Typography, Button, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MusicNote, CameraAlt, Code } from '@mui/icons-material';

const FloatingOrb = ({ delay, size, x, y, color }: { delay: number; size: number; x: string; y: string; color?: string }) => (
  <motion.div
    style={{ position: 'absolute', left: x, top: y, width: size, height: size, borderRadius: '50%', background: `radial-gradient(circle, ${color || 'rgba(139,92,246,0.3)'} 0%, transparent 70%)`, filter: 'blur(40px)' }}
    animate={{ y: [0, -30, 0], opacity: [0.3, 0.6, 0.3] }}
    transition={{ duration: 6, delay, repeat: Infinity, ease: 'easeInOut' }}
  />
);

export default function Home() {
  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden', background: 'radial-gradient(ellipse at top, #1a1a2e 0%, #0a0a0f 100%)' }}>
      <FloatingOrb delay={0} size={300} x="10%" y="20%" />
      <FloatingOrb delay={2} size={200} x="70%" y="60%" />
      <FloatingOrb delay={4} size={250} x="80%" y="10%" />
      <FloatingOrb delay={3} size={180} x="5%" y="70%" color="rgba(159,18,57,0.25)" />
      <Box sx={{ position: 'absolute', inset: 0, background: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")', opacity: 0.03 }} />
      <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1 }}>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.2 }}>
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.2 }}>
            <Typography variant="overline" sx={{ color: 'primary.main', letterSpacing: 4, mb: 2, display: 'block' }}>
              Welcome to my world
            </Typography>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.4 }}>
            <Typography variant="h1" sx={{ fontWeight: 700, mb: 2, fontSize: { xs: '2.5rem', md: '4rem' }, background: 'linear-gradient(135deg, #fff 0%, #8b5cf6 40%, #9f1239 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', lineHeight: 1.1 }}>
              Minglong Pan
            </Typography>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.6 }}>
            <Typography variant="h5" sx={{ mb: 3, color: 'rgba(255,255,255,0.7)', fontWeight: 300 }}>
              Creative Developer & Artist
            </Typography>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.8 }}>
            <Box sx={{ width: 60, height: 2, background: 'linear-gradient(90deg, #8b5cf6, #9f1239)', mb: 3 }} />
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 1 }}>
            <Typography variant="body1" sx={{ mb: 5, maxWidth: 480, color: 'rgba(255,255,255,0.6)', lineHeight: 1.8 }}>
              Exploring the intersection of music, visual art, and code. Each project is a journey through sound and pixels.
            </Typography>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 1.2 }}>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
              {[
                { to: '/music', icon: <MusicNote />, label: 'Music', primary: true },
                { to: '/photography', icon: <CameraAlt />, label: 'Photography' },
                { to: '/projects', icon: <Code />, label: 'Projects' },
              ].map((btn) => (
                <motion.div key={btn.label} whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.98 }}>
                  <Button
                    component={Link}
                    to={btn.to}
                    variant={btn.primary ? 'contained' : 'outlined'}
                    startIcon={btn.icon}
                    sx={{ px: 4, py: 1.5, borderRadius: 2, ...(btn.primary ? { background: 'linear-gradient(135deg, #8b5cf6, #6d28d9)', boxShadow: '0 4px 20px rgba(139,92,246,0.4)' } : { borderColor: 'rgba(255,255,255,0.2)', '&:hover': { borderColor: 'primary.main', background: 'rgba(139,92,246,0.1)' } }) }}
                  >
                    {btn.label}
                  </Button>
                </motion.div>
              ))}
            </Stack>
          </motion.div>
        </motion.div>
      </Container>
    </Box>
  );
}
