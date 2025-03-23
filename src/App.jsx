import { CssBaseline, ThemeProvider, createTheme, Box, Typography } from '@mui/material';
import Navbar from './pages/Navbar';
import Hero from './pages/HomePage';
import Services from './pages/Services';
import Projects from './pages/Projects';
import Coding from './pages/Coding';
import AboutMe from './pages/AboutMe';
import Certifications from './pages/Certifications';
import { useState, useEffect } from 'react';

const theme = createTheme({
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
  },
  palette: {
    mode: 'dark',
    background: {
      default: '#121212',
    },
  },
});

function App() {
  const [visitorCount, setVisitorCount] = useState(0);

  // Fetch visitor count from localStorage or set to 1 if visiting for the first time
  useEffect(() => {
    const storedCount = localStorage.getItem('visitorCount');
    const newCount = storedCount ? parseInt(storedCount, 10) + 1 : 1;
    localStorage.setItem('visitorCount', newCount);
    setVisitorCount(newCount);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />

      <Box id="home">
        <Hero />
      </Box>

      <Box id="services">
        <Services />
      </Box>

      <Box id="projects">
        <Projects />
      </Box>

      <Box id="coding">
        <Coding />
      </Box>

      <Box id="achievements">
        <Certifications />
      </Box>

      <Box id="aboutme">
        <AboutMe />
      </Box>

      <Box
        sx={{
          textAlign: 'center',
          py: 6,  // Reduced padding to remove blank space
          background: 'linear-gradient(135deg, rgba(255, 0, 150, 0.1), rgba(0, 212, 255, 0.1))',
          borderTop: '1px solid #333',
          borderBottom: '1px solid #333',
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)',
        }}
      >
        <Typography
          variant="h4"
          sx={{
            color: 'white',
            fontWeight: '700',
            fontSize: { xs: '1.8rem', sm: '2.2rem', md: '2.5rem' },
            lineHeight: 1.4,
            mb: 1, // Reduced margin-bottom
            textTransform: 'uppercase',
          }}
        >
          "Empowering digital experiences, one project at a time."
        </Typography>

        <Typography
          variant="body1"
          sx={{
            color: 'white',
            opacity: 0.8,
            fontSize: { xs: '1rem', sm: '1.2rem', md: '1.4rem' },
            fontWeight: '300',
            lineHeight: 1.5,
            px: { xs: 3, sm: 6 },
            mb: 2,  // Adjusted margin-bottom
          }}
        >
          Thank you for visiting. Let's build something amazing together.🤝
        </Typography>

        {/* Real-time Visitor Count */}
        <Box>
          <Typography
            variant="h6"
            sx={{
              color: '#ff4081',
              fontWeight: '600',
              fontSize: { xs: '1.2rem', sm: '1.5rem' },
            }}
          >
            💻 Visitor Count: {visitorCount}
          </Typography>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
