import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';

const ServiceCard = ({ title, description, Icon }) => {
  return (
    <>
   
    <Card 
      sx={{ 
        height: '100%',
        background: 'rgba(255, 255, 255, 0.05)',
        backdropFilter: 'blur(10px)',
        transition: 'transform 0.3s ease-in-out',
        '&:hover': {
          transform: 'translateY(-5px)',
        }
      }}
    >
      
      <CardContent sx={{ p: 4 }}>
        <Box sx={{ mb: 2, color: '#ff4081' }}>
          <Icon size={40} />
        </Box>
        <Typography variant="h5" component="h3" sx={{ mb: 2, fontWeight: 600 }}>
          {title}
        </Typography>
        <Typography variant="body1" sx={{ opacity: 0.8 }}>
          {description}
        </Typography>
      </CardContent>
    </Card>
    </>
  );
};

export default ServiceCard;
