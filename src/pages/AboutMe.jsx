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
              position: 'relative',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              boxShadow: '0px 4px 20px rgba(255, 64, 129, 0.5)', // Add shadow
              '&:hover': {
                transform: 'scale(1.1)', // Zoom in on hover
                boxShadow: '0px 8px 30px rgba(255, 64, 129, 0.8)', // Glow effect
              },
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                borderRadius: '50%',
                border: '2px solid transparent',
                background: 'linear-gradient(45deg, #9c27b0, #ff4081, #ff9100)',
                zIndex: -1,
                transform: 'scale(1.2)', // Slightly larger background
                transition: 'opacity 0.3s ease',
                opacity: 0.6, // Semi-transparent glow
              },
            }}
            alt="Profile"
            draggable="false"
            onContextMenu={(e) => e.preventDefault()} // Disable right-click
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
           marginTop:'60px'
        }}
      >
        EDUCATION
      </Typography>

      <TableContainer
        sx={{
          mb: 4,
          boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
          borderRadius: 2,
          backgroundColor: 'rgba(255, 255, 255, 0.05)', // Slight transparency
          backdropFilter: 'blur(10px)',
          overflow: 'hidden',
         
        }}
      >
        <Table>
          <TableHead>
            <TableRow
              sx={{
                background: 'linear-gradient(90deg, #9c27b0, #ff4081, #ff9100)',
              }}
            >
              <TableCell
                sx={{
                  fontWeight: 'bold',
                  color: 'white',
                  py: 2,
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                }}
              >
                Institution
              </TableCell>
              <TableCell
                sx={{
                  fontWeight: 'bold',
                  color: 'white',
                  py: 2,
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                }}
              >
                Degree
              </TableCell>
              <TableCell
                sx={{
                  fontWeight: 'bold',
                  color: 'white',
                  py: 2,
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                }}
              >
                Specialization
              </TableCell>
              <TableCell
                sx={{
                  fontWeight: 'bold',
                  color: 'white',
                  py: 2,
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                }}
              >
                Duration
              </TableCell>
              {/* <TableCell
                sx={{
                  fontWeight: 'bold',
                  color: 'white',
                  py: 2,
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                }}
              >
                Percentage/CGPA
              </TableCell> */}
            </TableRow>
          </TableHead>
          <TableBody>
            {/* KL University Row */}
            <TableRow sx={{ '&:nth-of-type(even)': { backgroundColor: 'rgba(255, 255, 255, 0.1)' } }}>
              <TableCell sx={{ py: 1.5, border: '1px solid rgba(255, 255, 255, 0.2)' }}>KL University</TableCell>
              <TableCell sx={{ py: 1.5, border: '1px solid rgba(255, 255, 255, 0.2)' }}>B.Tech - CSE</TableCell>
              <TableCell sx={{ py: 1.5, border: '1px solid rgba(255, 255, 255, 0.2)' }}>
                Cybersecurity and Blockchain Technology (DLA)
              </TableCell>
              <TableCell sx={{ py: 1.5, border: '1px solid rgba(255, 255, 255, 0.2)' }}>2022 - 2026</TableCell>
              {/* <TableCell sx={{ py: 1.5, border: '1px solid rgba(255, 255, 255, 0.2)' }}>9.4</TableCell> */}
            </TableRow>
            {/* Intermediate Row */}
            <TableRow sx={{ '&:nth-of-type(even)': { backgroundColor: 'rgba(255, 255, 255, 0.1)' } }}>
              <TableCell sx={{ py: 1.5, border: '1px solid rgba(255, 255, 255, 0.2)' }}>SRI CHAITANYA</TableCell>
              <TableCell sx={{ py: 1.5, border: '1px solid rgba(255, 255, 255, 0.2)' }}>Intermediate</TableCell>
              <TableCell sx={{ py: 1.5, border: '1px solid rgba(255, 255, 255, 0.2)' }}>MPC</TableCell>
              <TableCell sx={{ py: 1.5, border: '1px solid rgba(255, 255, 255, 0.2)' }}>2020 - 2022</TableCell>
              {/* <TableCell sx={{ py: 1.5, border: '1px solid rgba(255, 255, 255, 0.2)' }}>70%</TableCell> */}
            </TableRow>
            {/* SSC Row */}
            <TableRow sx={{ '&:nth-of-type(even)': { backgroundColor: 'rgba(255, 255, 255, 0.1)' } }}>
              <TableCell sx={{ py: 1.5, border: '1px solid rgba(255, 255, 255, 0.2)' }}>SRI CHAITANYA</TableCell>
              <TableCell sx={{ py: 1.5, border: '1px solid rgba(255, 255, 255, 0.2)' }}>SSC</TableCell>
              <TableCell sx={{ py: 1.5, border: '1px solid rgba(255, 255, 255, 0.2)' }}>Secondary School</TableCell>
              <TableCell sx={{ py: 1.5, border: '1px solid rgba(255, 255, 255, 0.2)' }}>2019 - 2020</TableCell>
              {/* <TableCell sx={{ py: 1.5, border: '1px solid rgba(255, 255, 255, 0.2)' }}>9.3</TableCell> */}
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
