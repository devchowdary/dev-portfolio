import { AppBar, Box, Button, Container, Toolbar, Typography } from '@mui/material';
const Navbar = () => {
  const pages = ['Home', 'About Me', 'Services','Projects', 'Contact'];

  return (
    <AppBar position="relative" sx={{ background: 'transparent', boxShadow: 'none' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            sx={{
              mr: 2,
              fontFamily: 'monospace',
              fontWeight: 700,
              color: 'white',
              textDecoration: 'none',
            }}
          >
            DevChowdary
          </Typography>

          <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
            {pages.map((page) => (
              <Button
                key={page}
                sx={{ 
                  my: 2,
                   
                  color: 'white', 
                  display: 'block',
                  '&:hover': {
                    background: 'rgba(255, 255, 255, 0.1)',
                  }
                }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Button
            variant="contained"
            sx={{
              background: 'linear-gradient(45deg, #9c27b0 30%, #ff4081 90%)',
              borderRadius: '50px',
              textTransform: 'none',
              px: 3,
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