import React from 'react';
import { Box, Typography } from '@mui/material';

const ProjectsHeader = () => {
  return (
    <Box sx={{ textAlign: 'center', mb: 8 }}>
      <Typography
        variant="h3"
        component="h2"
        sx={{
          fontWeight: 'bold',
          mb: 2,
          background: 'linear-gradient(45deg, #9c27b0, #ff4081, #ff9100)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        Featured Projects
      </Typography>
      <Typography variant="h6" sx={{ opacity: 0.8, maxWidth: 800, mx: 'auto' }}>
        Explore some of my recent work and technical achievements
      </Typography>
    </Box>
  );
};

export default ProjectsHeader;
