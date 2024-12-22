import React from 'react';
import { Grid, Typography, Box } from '@mui/material';

const TechnologyStack = ({ title, technologies }) => {
  return (
    <Box sx={{ mb: 4 }}>
      <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 3, color: 'white' }}>
        {title}
      </Typography>
      <Grid container spacing={4} sx={{ justifyContent: 'center' }}>
        {technologies.map((tech, index) => (
          <Grid item xs={6} sm={4} md={2} key={index} sx={{ textAlign: 'center' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <img
                src={tech.logo}
                alt={tech.name}
                style={{ width: '50px', height: '50px', objectFit: 'contain' }} // Adjust size as needed
              />
              <Typography variant="body2" sx={{ mt: 1, color: 'white' }}>
                {tech.name}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default TechnologyStack;
