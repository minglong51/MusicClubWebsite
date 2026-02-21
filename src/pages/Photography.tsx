import { Container, Typography, Box, Dialog, IconButton } from '@mui/material';
import { Close } from '@mui/icons-material';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { photos } from '../data/content';
import type { PhotoItem } from '../data/content';

export default function Photography() {
  const [selected, setSelected] = useState<PhotoItem | null>(null);

  return (
    <Box sx={{ minHeight: '100vh', py: 8, position: 'relative', background: 'linear-gradient(180deg, #0a0a0f 0%, #12121a 100%)' }}>
      <Box sx={{ position: 'absolute', top: '20%', right: '10%', width: 400, height: 400, background: 'radial-gradient(circle, rgba(6,182,212,0.12) 0%, transparent 70%)', filter: 'blur(60px)', pointerEvents: 'none' }} />
      <Box sx={{ position: 'absolute', bottom: '15%', left: '8%', width: 250, height: 250, background: 'radial-gradient(circle, rgba(159,18,57,0.15) 0%, transparent 70%)', filter: 'blur(50px)', pointerEvents: 'none' }} />
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <Typography variant="overline" sx={{ color: 'secondary.main', letterSpacing: 4 }}>Gallery</Typography>
          <Typography variant="h2" sx={{ mb: 1, fontWeight: 700 }}>Photography</Typography>
          <Box sx={{ width: 60, height: 2, background: 'linear-gradient(90deg, #06b6d4, #9f1239)', mb: 5 }} />
        </motion.div>
        <Box sx={{ columns: { xs: 1, sm: 2, md: 3 }, columnGap: 3 }}>
          {photos.map((photo, i) => (
            <motion.div key={photo.id} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 + i * 0.08, duration: 0.6 }} style={{ breakInside: 'avoid', marginBottom: 24 }}>
              <motion.div whileHover={{ scale: 1.03, y: -4 }} transition={{ duration: 0.3 }} style={{ cursor: 'pointer' }} onClick={() => setSelected(photo)}>
                <Box sx={{ position: 'relative', borderRadius: 3, overflow: 'hidden', '&::after': { content: '""', position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent 50%, rgba(0,0,0,0.7) 100%)', opacity: 0, transition: 'opacity 0.3s' }, '&:hover::after': { opacity: 1 }, '&:hover .photo-info': { opacity: 1, transform: 'translateY(0)' } }}>
                  <img src={photo.src} alt={photo.title} style={{ width: '100%', display: 'block', borderRadius: 12 }} loading="lazy" />
                  <Box className="photo-info" sx={{ position: 'absolute', bottom: 0, left: 0, right: 0, p: 2, opacity: 0, transform: 'translateY(10px)', transition: 'all 0.3s', zIndex: 1 }}>
                    <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>{photo.title}</Typography>
                    <Typography variant="caption" sx={{ color: 'secondary.main' }}>{photo.category}</Typography>
                  </Box>
                </Box>
              </motion.div>
            </motion.div>
          ))}
        </Box>
      </Container>
      <Dialog open={!!selected} onClose={() => setSelected(null)} maxWidth="lg" PaperProps={{ sx: { bgcolor: 'transparent', boxShadow: 'none', overflow: 'visible' } }}>
        {selected && (
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.3 }}>
            <IconButton onClick={() => setSelected(null)} sx={{ position: 'absolute', right: -40, top: -40, color: 'white', bgcolor: 'rgba(0,0,0,0.5)', '&:hover': { bgcolor: 'rgba(139,92,246,0.5)' } }}>
              <Close />
            </IconButton>
            <img src={selected.src} alt={selected.title} style={{ maxHeight: '85vh', maxWidth: '85vw', borderRadius: 12, boxShadow: '0 25px 50px rgba(0,0,0,0.5)' }} />
          </motion.div>
        )}
      </Dialog>
    </Box>
  );
}
