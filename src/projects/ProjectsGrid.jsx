import React from 'react';
import { Grid } from '@mui/material';
import ProjectCard from './ProjectCard';

const ProjectsGrid = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce platform with user authentication, product management, and payment integration.',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=400&fit=crop&q=80',
      technologies: ['React', 'Spring Boot', 'MySQL', 'Redux'],
      liveUrl: 'https://ecommerce-demo.example.com',
      githubUrl: 'https://github.com/username/ecommerce-platform',
      status:'ongoing',
      teamStatus:'solo'
    },
    {
      title: 'India Heritage ',
      description: 'A platform dedicated to showcasing India’s rich heritage and monuments, featuring virtual tours, detailed information, and cultural insights.',
      image: 'https://previews.123rf.com/images/vectomart/vectomart1508/vectomart150800014/43569222-illustration-of-wavy-indian-flag-with-monument.jpg',
      technologies: ['React', 'Spring Boot', 'MySQL'],
      liveUrl: 'https://indiachronicles.netlify.app/explore',
      githubUrl: 'https://github.com/devchowdary/india-chronicles',
      status:'completed',
      teamStatus:'solo'


    },
    {
      title: 'Healthcare Portal',
      description: 'A healthcare management system for patient records and appointment scheduling.',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=400&fit=crop&q=80',
      technologies: ['React', 'Spring Boot', 'MySQL', 'WebSocket'],
      liveUrl: 'https://healthcare-demo.example.com',
      githubUrl: 'https://github.com/username/healthcare-portal',
      status:'ongoing',
      teamStatus:'solo'


    },
    {
      title: 'online Donation System',
      description: 'An online donation system allows users to make, track, and manage donations to various causes securely through a web platform.',
      image: 'https://img.freepik.com/free-vector/donations-online-with-laptop_98292-982.jpg?t=st=1734859776~exp=1734863376~hmac=b233384cff1b2797f75650be037e2a25dbba10f70fc46ce91a0bc62bcfa46da7&w=740',
      technologies: ['React', 'Node.Js', 'Express', 'MongoDB'],
      liveUrl: 'https://donationsystem-klu.netlify.app/',
      githubUrl: 'https://github.com/likithkandepu13/online-donation-system',
      status:'completed',
      teamStatus:'team'


    }
  ];

  return (
    <Grid container spacing={4}>
      {projects.map((project) => (
        <Grid item xs={12} md={4} key={project.title}>
          <ProjectCard {...project} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ProjectsGrid;
