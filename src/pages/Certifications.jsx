import React from 'react';
import { Box, Card, CardContent, CardMedia, Typography, Button } from '@mui/material';

const certifications = [
  {
    title: 'Red Hat Certified EX-183',
    provider: 'Redhat',
    year: '2024',
    image: "https://cdn.thenewstack.io/media/2024/11/c57d7e8e-redhat-1024x683.png",
    link: 'https://www.credly.com/badges/77e7ea6f-793a-4f33-a8e1-d9261188a5f4/public_url',
  },
  {
    title: 'Certified AI Associate',
    provider: 'SalesForce',
    year: '2024',
    image: "https://images.ctfassets.net/nan8gu4ivyzc/73qWvrPT1QNqTpaNCgzF5A/2090bb8bbace25ed99b9b669e73ea837/salesforce-cover.png",
    link: 'https://trailhead.salesforce.com/en/credentials/certification-detail-print/?searchString=Yqy28SZfxdMNYvhLqqweTNc8yTCzx8iIHRivXJXcoL1CJfwsttZJ+qYS02nFzKvT',
  },
  {
    title: 'Blockchain Essentials',
    provider: 'Fintech',
    year: '2024',
    image: "https://media.licdn.com/dms/image/v2/C511BAQEpEbgJOpoR4g/company-background_10000/company-background_10000/0/1584215567681/fintech_council_cover?e=2147483647&v=beta&t=lmmt3GM25TAyfVAUq1worwh80hziu__gAS1a9XCVoK4",
    link: 'https://defi-portal.com/certificate-verification',
  },
];

const Certifications = () => {
  return (
    <Box sx={{ py: 1, px: 2 }}>
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
              height="200"
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
