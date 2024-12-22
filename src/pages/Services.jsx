import React from 'react';
import { Container, Box, Grid, Typography } from '@mui/material';
import ServicesHeader from '../services/ServicesHeader';
import ServicesGrid from '../services/ServicesGrid';
import TechnologyStack from '../services/TechnologyStack';

// Logos URLs (replace with actual URLs or local paths)
const frontendTech = [
  { name: 'React', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg' },
  { name: 'HTML5', logo: 'https://juststickers.in/wp-content/uploads/2016/05/html5-mark-only-badge-1.png' },
  { name: 'CSS3', logo: 'https://mgearon.com/wp-content/uploads/2014/08/CSS3-Logo.jpg.webp' },
  { name: 'JavaScript', logo: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png' },
];

const backendTech = [
  { name: 'Spring Boot', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-KwiTSpZNkGcWfQUKS35cIOPo8xRvj4PjRw&s' },
  { name: 'JSP', logo: 'https://javaflock.com/images/blog/jsp.png' },
  { name: 'Java', logo: 'https://i.pinimg.com/736x/a1/61/50/a161501cdf14eaba81addec865efbade.jpg' },
  { name: 'REST APIs', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDhF8zRAJnMSeC5f-tnNHXlLZlZcjXEEi9og&s' },
  {name: 'nodeJs', logo:'https://www.mindrops.com/images/nodejs-image.webp'}
];

const databaseTech = [
  { name: 'MySQL', logo: 'https://logolook.net/wp-content/uploads/2024/01/MySQL-Logo.png' },
  { name: 'MongoDB', logo: 'https://cdn.worldvectorlogo.com/logos/mongodb-icon-2.svg' },
  { name: 'PostgreSQL', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg' },
];

const programmingLanguages = [
  { name: 'C', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/C_Programming_Language.svg/1853px-C_Programming_Language.svg.png' },
  { name: 'C++', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZG7739eWowrkBSXjNg2B6dKYtNozCVlC6NQ&shttps://cdn.worldvectorlogo.com/logos/mongodb-icon-2.svg' },
  { name: 'JAVA', logo: 'https://www.svgrepo.com/show/303388/java-4-logo.svg' },
  {name: 'python', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX9KYoFpX9v-HF45IjK17OC4jhT19I55y0Fw&s'}
];

const Services = () => {
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
        <ServicesHeader />

        <Box sx={{ mb: 8 }}>
          <TechnologyStack title="Programming Languages" technologies={programmingLanguages} />
          <TechnologyStack title="Frontend Technologies" technologies={frontendTech} />
          <TechnologyStack title="Backend Technologies" technologies={backendTech} />
          <TechnologyStack title="Database Technologies" technologies={databaseTech} />
          {/* <TechnologyStack title="Programming Languages" technologies={programmingLanguages} /> */}
        </Box>

        <ServicesGrid />
      </Container>
    </Box>
  );
};

export default Services;
