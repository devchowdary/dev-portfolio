import { Box, Typography, Grid } from '@mui/material';

const InterestsAndHobbies = () => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#121212',
        color: 'white',
        pt: 4,
        pb: 4,
      }}
    >
      <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 4 }}>
        My Interests & Hobbies
      </Typography>
      
      {/* Grid layout for left, center, and right sections */}
      <Grid container spacing={4} sx={{ width: '80%' }}>
        {/* Left Column */}
        <Grid item xs={12} md={4}>
          <Box
            sx={{
              backgroundColor: '#1d1d1d',
              padding: 3,
              borderRadius: 2,
              height: '100%',
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: '600', mb: 2 }}>
              Technical Interests
            </Typography>
            <Typography variant="body1" sx={{ opacity: 0.8 }}>
              - Full Stack Development
              <br />
              - Cloud Computing
              <br />
              - Blockchain Technology
              <br />
              - Machine Learning
            </Typography>
          </Box>
        </Grid>

        {/* Center Column (Main text about hobbies) */}
        <Grid item xs={12} md={4}>
          <Box
            sx={{
              backgroundColor: '#1d1d1d',
              padding: 3,
              borderRadius: 2,
              height: '100%',
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: '600', mb: 2 }}>
              Hobbies & Personal Interests
            </Typography>
            <Typography variant="body1" sx={{ opacity: 0.8 }}>
              I have a passion for coding, exploring new technologies, and improving my skills. In my free time, I enjoy reading, playing video games, and staying active with sports.
            </Typography>
          </Box>
        </Grid>

        {/* Right Column */}
        <Grid item xs={12} md={4}>
          <Box
            sx={{
              backgroundColor: '#1d1d1d',
              padding: 3,
              borderRadius: 2,
              height: '100%',
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: '600', mb: 2 }}>
              Personal Growth
            </Typography>
            <Typography variant="body1" sx={{ opacity: 0.8 }}>
              - Continuous Learning
              <br />
              - Attending Webinars & Conferences
              <br />
              - Contributing to Open Source
              <br />
              - Exploring New Frameworks
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default InterestsAndHobbies;
