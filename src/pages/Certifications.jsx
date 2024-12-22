import React from 'react';
import { Box, Card, CardContent, CardMedia, Typography, Button } from '@mui/material';
import redhat from '../images/redhat.jpg';
import salesforce from '../images/salesforce.jpg';
import fintech from '../images/fintech.jpg';

const certifications = [
  {
    title: 'Red Hat Certified Enterprise Application Developer',
    provider: 'Redhat',
    year: '2024',
    image: redhat,
    link: 'https://www.credly.com/badges/77e7ea6f-793a-4f33-a8e1-d9261188a5f4/public_url',
  },
  {
    title: 'Certified AI Associate',
    provider: 'SalesForce',
    year: '2024',
    image: salesforce,
    link: 'https://trailhead.salesforce.com/en/credentials/certification-detail-print/?searchString=Yqy28SZfxdMNYvhLqqweTNc8yTCzx8iIHRivXJXcoL1CJfwsttZJ+qYS02nFzKvT',
  },
  {
    title: 'Blockchain Essentials',
    provider: 'IBM',
    year: '2021',
    image: fintech,
    link: 'https://defi-portal.com/certificate-verification',
  },
];

const Certifications = () => {
  return (
    <Box sx={{ py: 8, px: 2 }}>
      <Typography
        variant="h3"
        component="h2"
        sx={{
          fontWeight: 'bold',
          mb: 6,
          textAlign: 'center',
          background: 'linear-gradient(45deg, #9c27b0, #ff4081, #ff9100)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        CERTIFICATIONS
      </Typography>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 4,
        }}
      >
        {certifications.map((cert, index) => (
        <Card
  key={index}
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
    },
  }}
>

       
            <CardMedia
              component="img"
              height="300"
              image={cert.image}
              alt={cert.title}
              sx={{
                filter: 'brightness(0.9)',
                '&:hover': {
                  filter: 'brightness(1)',
                },
              }}
            />
            <CardContent sx={{ p: 3 }}>
              <Typography variant="h5" component="h3" sx={{ mb: 2, fontWeight: 600 }}>
                {cert.title}
              </Typography>
              <Typography variant="body1" sx={{ mb: 1, opacity: 0.8 }}>
                Provider: {cert.provider}
              </Typography>
              <Typography variant="body2" sx={{ opacity: 0.6 }}>
                Year: {cert.year}
              </Typography>
              <Box sx={{ mt: 2 }}>
                <Button
                  variant="contained"
                  color="secondary"
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    background: 'linear-gradient(45deg, #ff4081, #ff9100)',
                    color: '#fff',
                    fontWeight: 'bold',
                    textTransform: 'none',
                    '&:hover': {
                      background: 'linear-gradient(45deg, #ff9100, #ff4081)',
                    },
                  }}
                >
                  View Certification
                </Button>
              </Box>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default Certifications;
