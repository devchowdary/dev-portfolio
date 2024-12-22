import React from 'react';
import { Container, Box } from '@mui/material';
import ProjectsHeader from '../projects/ProjectsHeader';
import ProjectsGrid from '../projects/ProjectsGrid';

const Projects = () => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        pt: 12,
        pb: 8,
        background: '#121212',
      }}
    >
      <Container maxWidth="lg">
        <ProjectsHeader />
        <ProjectsGrid />
      </Container>
    </Box>
  );
};

export default Projects;
