import React, { useState, useEffect } from 'react';
import { Box, Button, Container, Typography, Dialog, DialogActions, DialogContent } from '@mui/material';
import devendra from '../images/devendra.jpg';
import resumePDF from '../files/RESUME.pdf'; // Path to your resume PDF

const roles = ['Full Stack Developer.', 'Blockchain Developer.', 'Software Developer.'];

const HomePage = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // Dialog handlers
  const handleOpenDialog = () => setOpenDialog(true);
  const handleCloseDialog = () => setOpenDialog(false);

  // Typing effect logic
  useEffect(() => {
    const role = roles[currentRoleIndex];
    const typingSpeed = 150;
    const deletingSpeed = 75;

    const typingEffect = () => {
      if (!isDeleting) {
        setDisplayedText((prev) => role.substring(0, prev.length + 1));
        if (displayedText === role) {
          setTimeout(() => setIsDeleting(true), 1000); // Pause before deleting
        }
      } else {
        setDisplayedText((prev) => role.substring(0, prev.length - 1));
        if (displayedText === '') {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    };

    const typingInterval = setTimeout(typingEffect, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(typingInterval);
  }, [displayedText, isDeleting, currentRoleIndex]);

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
              width: 220,
              height: 220,
              borderRadius: '50%',
              mb: 1,
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              boxShadow: '0px 4px 20px rgba(255, 64, 129, 0.5)', // Add shadow
              '&:hover': {
                transform: 'scale(1.1)', // Zoom in on hover
                boxShadow: '0px 8px 30px rgba(255, 64, 129, 0.8)', // Glow effect
              },
            }}
            alt="Profile"
            draggable="false"
            onContextMenu={(e) => e.preventDefault()} // Disable right-click
          />

          {/* Name */}
          <Typography variant="h2" component="h1" sx={{ fontWeight: 'bold' }}>
            <Box
              component="span"
              sx={{
                background: 'linear-gradient(45deg, #9c27b0, #ff4081, #ff9100)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              I'm Devendra Prasad Madala
            </Box>
          </Typography>

          {/* Role with Typing Effect */}
          <Typography
            variant="h3"
            sx={{ color: 'white', minHeight: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >
            {displayedText}
            <Box component="span" sx={{ animation: 'blink 1s steps(2, start) infinite' }}>
              |
            </Box>
          </Typography>

          <Typography variant="h6" sx={{ maxWidth: 800, opacity: 0.8 }}>
            A passionate Software Developer with 2 years of hands-on experience in creating innovative and scalable solutions for diverse projects.
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
              href="mailto:devendrachowdary45@gmail.com"
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
              onClick={handleOpenDialog}
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

          <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
            <Button
              variant="contained"
              color="primary"
              href={resumePDF}
              target="_blank"
              download
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
