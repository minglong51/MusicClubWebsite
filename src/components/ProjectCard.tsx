import { Card, CardContent, CardActions, Typography, Chip, Button, Box } from '@mui/material';
import { GitHub, Launch } from '@mui/icons-material';
import { motion } from 'framer-motion';
import type { Project } from '../data/content';

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div whileHover={{ y: -8 }} transition={{ duration: 0.3 }}>
      <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', bgcolor: 'rgba(18,18,26,0.8)', backdropFilter: 'blur(10px)', border: '1px solid rgba(139,92,246,0.15)', borderRadius: 3, transition: 'all 0.3s', position: 'relative', overflow: 'hidden', '&:hover': { borderColor: 'rgba(159,18,57,0.5)', boxShadow: '0 20px 40px rgba(0,0,0,0.4)' }, '&::before': { content: '""', position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: 'linear-gradient(90deg, #8b5cf6, #9f1239)', opacity: 0, transition: 'opacity 0.3s' }, '&:hover::before': { opacity: 1 } }}>
        <CardContent sx={{ flexGrow: 1, p: 3 }}>
          <Typography variant="h6" sx={{ fontWeight: 600, mb: 1.5 }}>{project.title}</Typography>
          <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.6)', mb: 2.5, lineHeight: 1.7 }}>{project.description}</Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
            {project.tags.map((tag) => (
              <Chip key={tag} label={tag} size="small" sx={{ bgcolor: 'rgba(139,92,246,0.15)', border: '1px solid rgba(139,92,246,0.3)', fontSize: '0.7rem' }} />
            ))}
          </Box>
        </CardContent>
        <CardActions sx={{ p: 2, pt: 0 }}>
          {project.github && (
            <Button size="small" startIcon={<GitHub />} href={project.github} target="_blank" sx={{ color: 'rgba(255,255,255,0.7)', '&:hover': { color: 'primary.main' } }}>GitHub</Button>
          )}
          {project.demo && (
            <Button size="small" startIcon={<Launch />} href={project.demo} target="_blank" sx={{ color: 'rgba(255,255,255,0.7)', '&:hover': { color: 'secondary.main' } }}>Demo</Button>
          )}
        </CardActions>
      </Card>
    </motion.div>
  );
}
