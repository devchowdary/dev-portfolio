import { CssBaseline, ThemeProvider, createTheme, Box, Typography } from '@mui/material';
import Navbar from './pages/Navbar';
import Hero from './pages/HomePage';
import Services from './pages/Services';
import Projects from './pages/Projects';
import Coding from './pages/Coding';
import AboutMe from './pages/AboutMe';


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
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      
      <Navbar />
      <Hero />
      <Services/>
      <Projects/>
      <Coding/>
      <AboutMe/>
      <Box
        sx={{
          textAlign: 'center',
          mt: 8,
          py: 8,
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
            mb: 2,
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
          }}
        >
          Thank you for visiting. Let's build something amazing together.
        </Typography>
      </Box>
    </ThemeProvider>
  );
}

export default App;