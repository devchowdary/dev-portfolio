import React from 'react';
import { Box, Card, CardContent, CardMedia, Typography, Button, Chip, Stack, Tooltip } from '@mui/material';
import { ExternalLink, Github } from 'lucide-react';
import { Person, Group } from '@mui/icons-material';

const ProjectCard = ({ title, status, teamStatus, description, image, technologies, liveUrl, githubUrl }) => {
  const statusColor = status === 'ongoing' ? '#FFC107' : '#4CAF50'; // Yellow for ongoing, Green for completed

  return (
    <Card
      sx={{
        maxWidth: 360,
        borderRadius: '16px',
        background: 'linear-gradient(135deg, #1E1E2F, #2A2A42)',
        color: '#ffffff',
        boxShadow: '0 8px 20px rgba(0,0,0,0.3)',
        transition: 'all 0.4s ease',
        '&:hover': {
          transform: 'translateY(-8px)',
          boxShadow: '0 12px 24px rgba(0,0,0,0.5)',
        }
      }}
    >
      <CardMedia
        component="img"
        height="180"
        image={image}
        alt={title}
        sx={{
          borderRadius: '16px 16px 0 0',
          transition: 'all 0.4s ease',
          '&:hover': {
            transform: 'scale(1.05)',
          }
        }}
      />

      <CardContent sx={{ p: 3 }}>
        {/* Title and Status */}
        <Stack direction="row" justifyContent="space-between" alignItems="center" mb={2}>
          <Typography variant="h6" fontWeight="bold" sx={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
            {title}
          </Typography>
          <Tooltip title={status === 'ongoing' ? 'Ongoing Project' : 'Completed Project'}>
            <Chip 
              label={status === 'ongoing' ? 'Ongoing' : 'Completed'}
              sx={{ 
                backgroundColor: statusColor, 
                color: '#000', 
                fontWeight: 'bold', 
                fontSize: '12px' 
              }} 
            />
          </Tooltip>
        </Stack>

        {/* Team Status */}
        <Stack direction="row" alignItems="center" spacing={1} mb={2}>
          {teamStatus === 'solo' ? (
            <>
              <Person sx={{ color: '#FFC107' }} />
              <Typography variant="body2">Solo</Typography>
            </>
          ) : (
            <>
              <Group sx={{ color: '#4CAF50' }} />
              <Typography variant="body2">Team</Typography>
            </>
          )}
        </Stack>

        {/* Description */}
        <Typography variant="body2" sx={{ mb: 2, opacity: 0.8, lineHeight: 1.5 }}>
          {description}
        </Typography>

        {/* Technologies */}
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mb: 3 }}>
          {technologies.map((tech, index) => (
            <Chip 
              key={index} 
              label={tech} 
              size="small" 
              sx={{ background: '#6c5ce7', color: '#fff', fontSize: '12px' }}
            />
          ))}
        </Box>

        {/* Buttons */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Button
            variant="contained"
            startIcon={<ExternalLink size={16} />}
            href={liveUrl}
            target="_blank"
            sx={{
              background: 'linear-gradient(135deg, #8e44ad, #c0392b)',
              color: '#fff',
              textTransform: 'none',
              '&:hover': {
                background: 'linear-gradient(135deg, #9b59b6, #e74c3c)',
              }
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
              borderColor: '#9b59b6',
              color: '#9b59b6',
              textTransform: 'none',
              '&:hover': {
                borderColor: '#c0392b',
                color: '#c0392b',
              }
            }}
          >
            Code
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
