import React from 'react';
import { Box, Typography, Container, Grid, Avatar, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import devendra from '../images/devendra.jpg'

const AboutMeHeader = () => {
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
        About Me
      </Typography>
      <Typography
        variant="h6"
        sx={{
          opacity: 0.8,
          maxWidth: 800,
          mx: 'auto',
          color: 'white', // White text for better readability
        }}
      >
        A brief introduction to who I am, my background, and my journey
      </Typography>
    </Box>
  );
};

const AboutMe = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 8, backgroundColor: 'none', color: 'white' }}>
      <AboutMeHeader />
      <Grid container spacing={4}>
        <Grid item xs={12} md={4} sx={{ textAlign: 'center' }}>
        <Box
          component="img"
          src={devendra}
          sx={{
            width: 150,
            height: 150,
            borderRadius: '50%',
            mb: 2,
          }}
          alt="Profile"
          draggable="false" // Disable image dragging
          onContextMenu={(e) => e.preventDefault()} // Disable right-click context menu for saving
        />

          <Typography
        variant="h5"
        component="h2"
        sx={{
          fontWeight: 'bold',
          mb: 2,
          background: 'linear-gradient(45deg, #9c27b0, #ff4081, #ff9100)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        DEVENDRA PRASAD
      </Typography>
          <Typography variant="body1" sx={{ mb: 3 }}>
          As a Full Stack Developer with 2 years of experience, I specialize in creating scalable
            and user-friendly web applications. Proficient in React, Redux, Spring Boot, and Java,
            I focus on delivering high-quality code and seamless user experiences across both frontend
              and backend development."
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
            <Button
              variant="outlined"
              href="https://github.com/devchowdary"
              target="_blank"
              startIcon={<GitHubIcon />}
              sx={{
                color: 'white',
                borderColor: 'white',
                '&:hover': {
                  backgroundColor: '#ff4081',
                  borderColor: '#ff4081',
                },
              }}
            >
              GitHub
            </Button>
            <Button
              variant="outlined"
              href="https://www.linkedin.com/in/devendra-chowdary-a31519320?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
              target="_blank"
              startIcon={<LinkedInIcon />}
              sx={{
                color: 'white',
                borderColor: 'white',
                '&:hover': {
                  backgroundColor: '#0e76a8',
                  borderColor: '#0e76a8',
                },
              }}
            >
              LinkedIn
            </Button>
            <Button
              variant="outlined"
              href="https://twitter.com/devchowdary11"
              target="_blank"
              startIcon={<TwitterIcon />}
              sx={{
                color: 'white',
                borderColor: 'white',
                '&:hover': {
                  backgroundColor: '#1DA1F2',
                  borderColor: '#1DA1F2',
                },
              }}
            >
              Twitter
            </Button>
          </Box>
        </Grid>

        <Grid item xs={12} md={8}>
        <Typography
        variant="h5"
        component="h2"
        sx={{
          fontWeight: 'bold',
          mb: 2,
          marginLeft:'35%',
          background: 'linear-gradient(45deg, #9c27b0, #ff4081, #ff9100)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        EDUCATION
      </Typography>

          <TableContainer sx={{ mb: 4 }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell sx={{ fontWeight: 'bold' }}>Institution</TableCell>
                  <TableCell sx={{ fontWeight: 'bold' }}>Degree</TableCell>
                  <TableCell sx={{ fontWeight: 'bold' }}>Specialization</TableCell>
                  <TableCell sx={{ fontWeight: 'bold' }}>Duration</TableCell>
                  <TableCell sx={{ fontWeight: 'bold' }}>Percentage/CGPA</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {/* KL University Row */}
                <TableRow>
                  <TableCell>KL University</TableCell>
                  <TableCell>B.Tech - CSE</TableCell>
                  <TableCell>Cybersecurity and Blockchain Technology (DLA)</TableCell>
                  <TableCell>2022 - 2026</TableCell>
                  <TableCell>9.4</TableCell>
                </TableRow>
                {/* Intermediate Row */}
                <TableRow>
                  <TableCell>SRI CHAITANYA</TableCell>
                  <TableCell>Intermediate</TableCell>
                  <TableCell>MPC</TableCell>
                  <TableCell>2020 - 2022</TableCell>
                  <TableCell>70%</TableCell>
                </TableRow>
                {/* SSC Row */}
                <TableRow>
                  <TableCell>SRI CHAITANYA</TableCell>
                  <TableCell>SSC</TableCell>
                  <TableCell>--</TableCell>
                  <TableCell>2019 - 2020</TableCell>
                  <TableCell>9.3</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AboutMe;
