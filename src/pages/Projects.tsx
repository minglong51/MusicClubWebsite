import { Container, Typography, Grid, Box } from '@mui/material';
import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/content';

export default function Projects() {
  return (
    <Box sx={{ minHeight: '100vh', py: 8, position: 'relative', background: 'linear-gradient(180deg, #0a0a0f 0%, #12121a 100%)' }}>
      <Box sx={{ position: 'absolute', top: '30%', left: '5%', width: 500, height: 500, background: 'radial-gradient(circle, rgba(139,92,246,0.1) 0%, transparent 70%)', filter: 'blur(60px)', pointerEvents: 'none' }} />
      <Box sx={{ position: 'absolute', bottom: '20%', right: '10%', width: 350, height: 350, background: 'radial-gradient(circle, rgba(159,18,57,0.1) 0%, transparent 70%)', filter: 'blur(50px)', pointerEvents: 'none' }} />
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <Typography variant="overline" sx={{ color: 'primary.main', letterSpacing: 4 }}>Portfolio</Typography>
          <Typography variant="h2" sx={{ mb: 1, fontWeight: 700 }}>Projects</Typography>
          <Box sx={{ width: 60, height: 2, background: 'linear-gradient(90deg, #8b5cf6, #06b6d4)', mb: 5 }} />
        </motion.div>
        <Grid container spacing={4}>
          {projects.map((project, i) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={project.id}>
              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 + i * 0.1, duration: 0.6 }}>
                <ProjectCard project={project} />
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
