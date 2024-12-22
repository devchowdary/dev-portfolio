import { Box, Typography } from '@mui/material';

const ServicesHeader = () => {
  return (
    <Box sx={{ textAlign: 'center', mb: 8 }}>
      <Typography
        variant="h3"
        component="h1"
        sx={{
          fontWeight: 'bold',
          mb: 2,
          background: 'linear-gradient(45deg, #9c27b0, #ff4081, #ff9100)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        Full Stack Development Services
      </Typography>
      <Typography variant="h6" sx={{ opacity: 0.8, maxWidth: 800, mx: 'auto' }}>
        Delivering end-to-end solutions with modern technologies and best practices
      </Typography>
    </Box>
  );
};

export default ServicesHeader;