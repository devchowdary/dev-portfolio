import React, { useState } from 'react';
import { Box, Button, Container, Typography, Dialog, DialogActions, DialogContent } from '@mui/material';
import devendra from '../images/devendra.jpg';
import resumePDF from '../files/RESUME.pdf'; // Path to your resume PDF

const HomePage = () => {
  // State to control Dialog open/close
  const [openDialog, setOpenDialog] = useState(false);

  // Function to open dialog
  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  // Function to close dialog
  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        background: '#121212',
        color: 'white',
        position: 'relative',
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            gap: 4,
          }}
        >
       <Box
        component="img"
        src={devendra}
        sx={{
          width: 250,
          height: 250,
          borderRadius: '50%',
          mb: 2,
          position: 'relative',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          boxShadow: '0px 4px 20px rgba(255, 64, 129, 0.5)', // Add shadow
          '&:hover': {
            transform: 'scale(1.1)', // Zoom in on hover
            boxShadow: '0px 8px 30px rgba(255, 64, 129, 0.8)', // Glow effect
          },
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            border: '2px solid transparent',
            background: 'linear-gradient(45deg, #9c27b0, #ff4081, #ff9100)',
            zIndex: -1,
            transform: 'scale(1.2)', // Slightly larger background
            transition: 'opacity 0.3s ease',
            opacity: 0.6, // Semi-transparent glow
          },
        }}
        alt="Profile"
        draggable="false"
        onContextMenu={(e) => e.preventDefault()} // Disable right-click
      />


          <Typography variant="h2" component="h1" sx={{ fontWeight: 'bold' }}>
            <Box
              component="span"
              sx={{
                background: 'linear-gradient(45deg, #9c27b0, #ff4081, #ff9100)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              I'm Dev Chowdary,
            </Box>{' '}
            <Box component="span" sx={{ color: 'white' }}>
              Full Stack developer based in India.
            </Box>
          </Typography>

          <Typography variant="h6" sx={{ maxWidth: 800, opacity: 0.8 }}>
          A passionate Full Stack Developer with 2 years of hands-on experience in creating innovative and scalable solutions for diverse projects.
          </Typography>

          <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
            <Button
              variant="contained"
              sx={{
                background: 'linear-gradient(45deg, #9c27b0 30%, #ff4081 90%)',
                borderRadius: '50px',
                textTransform: 'none',
                px: 4,
                py: 1.5,
              }}
              href="mailto:devendrachowdary45@gmail.com" // Mailto link to open the email compose window
            >
              Connect with me
            </Button>
            <Button
              variant="outlined"
              sx={{
                color: 'white',
                borderColor: 'white',
                borderRadius: '50px',
                textTransform: 'none',
                px: 4,
                py: 1.5,
                '&:hover': {
                  borderColor: 'white',
                  background: 'rgba(255, 255, 255, 0.1)',
                },
              }}
              onClick={handleOpenDialog} // Open the resume dialog
            >
              My resume
            </Button>
          </Box>
        </Box>
      </Container>

      {/* Dialog for Resume */}
      <Dialog open={openDialog} onClose={handleCloseDialog} maxWidth="sm" fullWidth>
  <DialogContent sx={{ padding: 4 }}>
    <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2, textAlign: 'center' }}>
      My Resume
    </Typography>
    <Typography variant="body1" sx={{ mb: 3, textAlign: 'center', opacity: 0.8 }}>
      You can view or download my resume from the link below. Feel free to contact me for further discussions or opportunities.
    </Typography>

    {/* Displaying resume PDF link */}
    <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
      <Button
        variant="contained"
        color="primary"
        href={resumePDF} // Link to the resume file
        target="_blank" // Opens in a new tab
        download // Trigger file download
        sx={{
          background: 'linear-gradient(45deg, #9c27b0 30%, #ff4081 90%)',
          borderRadius: '50px',
          textTransform: 'none',
          px: 5,
          py: 1.5,
          '&:hover': {
            background: 'linear-gradient(45deg, #ff4081 30%, #9c27b0 90%)',
          },
        }}
      >
        Download Resume
      </Button>
    </Box>
  </DialogContent>

  <DialogActions sx={{ justifyContent: 'center', mb: 2 }}>
    <Button onClick={handleCloseDialog} color="secondary" sx={{ textTransform: 'none' }}>
      Close
    </Button>
  </DialogActions>
      </Dialog>

    </Box>
  );
};

export default HomePage;
