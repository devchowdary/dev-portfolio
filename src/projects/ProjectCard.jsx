import React from 'react';
import { Box, Card, CardContent, CardMedia, Typography, Button } from '@mui/material';
import { ExternalLink, Github } from 'lucide-react';

const ProjectCard = ({ title,status,teamStatus, description, image, technologies, liveUrl, githubUrl }) => {
  return (
    <Card
      sx={{
        height: '100%',
        background: 'rgba(255, 255, 255, 0.05)',
        position: 'relative',
        overflow: 'hidden',
        transition: 'all 0.3s ease-in-out',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          borderRadius: '4px',
          padding: '2px',
          background: 'linear-gradient(45deg, #9c27b0, #ff4081, #ff9100)',
          WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'xor',
          maskComposite: 'exclude',
          opacity: 0,
          transition: 'opacity 0.3s ease-in-out',
        },
        '&:hover': {
          transform: 'translateY(-5px)',
          '&::before': {
            opacity: 1,
          },
          '& .project-overlay': {
            opacity: 1,
          }
        }
      }}
    >
      <CardMedia
        component="img"
        height="200"
        image={image}
        alt={title}
      />
      <CardContent sx={{ p: 3 }}>
        <Typography variant="h5" component="h3" sx={{ mb: 2, fontWeight: 600 }}>
          {title}
        </Typography>
        <Typography variant="h6" component="h6" sx={{ mb: 2, fontWeight: 500 }}>
          {status}
        </Typography>
        <Typography variant="h6" component="h6" sx={{ mb: 2, fontWeight: 400 }}>
          {teamStatus }
        </Typography>
        <Typography variant="body2" sx={{ mb: 2, opacity: 0.8 }}>
          {description}
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
          {technologies.map((tech) => (
            <Typography
              key={tech}
              variant="caption"
              sx={{
                px: 1,
                py: 0.5,
                borderRadius: 1,
                background: 'rgba(255, 255, 255, 0.1)',
              }}
            >
              {tech}
            </Typography>
          ))}
        </Box>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button
            variant="contained"
            startIcon={<ExternalLink size={16} />}
            href={liveUrl}
            target="_blank"
            sx={{
              background: 'linear-gradient(45deg, #9c27b0 30%, #ff4081 90%)',
              textTransform: 'none',
            }}
          >
            Live Demo
          </Button>
          <Button
            variant="outlined"
            startIcon={<Github size={16} />}
            href={githubUrl}
            target="_blank"
            sx={{
              borderColor: 'rgba(255, 255, 255, 0.3)',
              color: 'white',
              textTransform: 'none',
              '&:hover': {
                borderColor: 'white',
              }
            }}
          >
            Source Code
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;