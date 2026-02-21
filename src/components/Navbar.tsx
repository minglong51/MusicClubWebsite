import { AppBar, Toolbar, Button, Box, IconButton, Drawer, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { motion } from 'framer-motion';

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Music', path: '/music' },
  { label: 'Photography', path: '/photography' },
  { label: 'Projects', path: '/projects' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      <AppBar position="fixed" elevation={0} sx={{ background: 'rgba(10,10,15,0.7)', backdropFilter: 'blur(20px)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <motion.div whileHover={{ scale: 1.02 }}>
            <Button component={Link} to="/" sx={{ color: 'white', fontWeight: 700, fontSize: '1.1rem', background: 'linear-gradient(90deg, #fff, #8b5cf6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              MP
            </Button>
          </motion.div>
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1 }}>
            {navItems.map((item) => (
              <motion.div key={item.path} whileHover={{ y: -2 }}>
                <Button
                  component={Link}
                  to={item.path}
                  sx={{ color: location.pathname === item.path ? 'primary.main' : 'rgba(255,255,255,0.7)', position: 'relative', '&::after': { content: '""', position: 'absolute', bottom: 6, left: '50%', transform: 'translateX(-50%)', width: location.pathname === item.path ? 20 : 0, height: 2, bgcolor: 'primary.main', borderRadius: 1, transition: 'width 0.3s' }, '&:hover': { color: 'white', '&::after': { width: 20 } } }}
                >
                  {item.label}
                </Button>
              </motion.div>
            ))}
          </Box>
          <IconButton sx={{ display: { md: 'none' }, color: 'white' }} onClick={() => setMobileOpen(true)}>
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer anchor="right" open={mobileOpen} onClose={() => setMobileOpen(false)} PaperProps={{ sx: { bgcolor: 'rgba(10,10,15,0.95)', backdropFilter: 'blur(20px)' } }}>
        <List sx={{ width: 220, pt: 4 }}>
          {navItems.map((item) => (
            <ListItem key={item.path} disablePadding>
              <ListItemButton component={Link} to={item.path} onClick={() => setMobileOpen(false)} sx={{ py: 2, '&:hover': { bgcolor: 'rgba(139,92,246,0.1)' } }}>
                <ListItemText primary={item.label} sx={{ '& .MuiTypography-root': { color: location.pathname === item.path ? 'primary.main' : 'white' } }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Toolbar />
    </>
  );
}
