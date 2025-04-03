import { useState } from 'react';
import { AppBar, Box, Button, Container, Toolbar, Typography, IconButton, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import title from "../images/title.png"

const Navbar = () => {
  const pages = ['Home', 'Services', 'Projects', 'Certifications', 'About Me'];
  const [anchorEl, setAnchorEl] = useState(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleScroll = (section) => {
    const element = document.getElementById(section.toLowerCase().replace(/\s/g, ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setAnchorEl(null);
  };

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="relative" sx={{ background: 'transparent', boxShadow: 'none' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
        <img
          src={title} 
          alt="DevendraPrasad Logo"
          style={{
            width: '100px',        
            height: 'auto',
            marginRight: '10px',    
            transition: 'transform 0.3s ease-in-out',
            cursor: 'pointer',
            '&:hover': {
              transform: 'scale(1.1)',  
            },
            borderRadius:'10px'
          }}
        />


          {isMobile ? (
            <>
              <IconButton
                size="large"
                aria-label="menu"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenuOpen}
                sx={{ color: 'white', ml: 'auto' }}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
                sx={{ mt: '45px' }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={() => handleScroll(page)}>
                    {page}
                  </MenuItem>
                ))}
              </Menu>
            </>
          ) : (
            <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={() => handleScroll(page)}
                  sx={{
                    my: 2,
                    color: 'white',
                    display: 'block',
                    '&:hover': {
                      background: 'rgba(255, 255, 255, 0.1)',
                    },
                  }}
                >
                  {page}
                </Button>
              ))}
            </Box>
          )}

          <Button
            variant="contained"
            sx={{
              background: 'linear-gradient(45deg, #9c27b0 30%, #ff4081 90%)',
              borderRadius: '50px',
              textTransform: 'none',
              px: 3,
              display: { xs: 'none', md: 'block' },
            }}
            href="mailto:devendrachowdary45@gmail.com"
          >
            Connect With Me
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
