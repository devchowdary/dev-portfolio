  import React from 'react';
  import { Grid } from '@mui/material';
  import ProjectCard from './ProjectCard';

  const ProjectsGrid = () => {
    const projects = [
      {
        title: 'KL-ZROTRIYA',
        description: 'Zrotriya is ECE’s national-level fest with events, workshops, and industry talks. Contributed to its development.',
        image: 'https://res.cloudinary.com/dmfdfcss6/image/upload/f_auto,q_auto/wpls4a0awnebctfkot1c',
        technologies: ['React','TailwindCSS', 'Spring Boot', 'MySQL'],
        liveUrl: 'https://zrotriya-pulse.netlify.app/',
        githubUrl: '/',
        status:'Completed',
        teamStatus:'solo'
      },
      {
        title: 'PETS WORLD',
        description: 'Pets World is an e-commerce website for pet products, featuring a variety of pets, supplies, and services. Contributed to its development.',
        image: 'https://res.cloudinary.com/dmfdfcss6/image/upload/f_auto,q_auto/mmbuol1spiuqfps9xned',
        technologies: ['React','TailwindCSS', 'Spring Boot', 'MySQL'],
        liveUrl: 'https://furry-fam.netlify.app/',
        githubUrl: '/',
        status:'ongoing',
        teamStatus:'solo'
      },
      {
        title: 'JRK TRADERS',
        description: 'JRK Traders is a multi-service website offering book sales, credit cards, personal loans, and BPO call center services.',
        image: 'https://res.cloudinary.com/dmfdfcss6/image/upload/f_auto,q_auto/j8yksvz1puuawbsf9bcx',
        technologies: ['React', 'Spring Boot', 'MySQL','Docker'],
        liveUrl: 'https://jrksolutions.in/',
        githubUrl: '/',
        status:'completed',
        teamStatus:'solo'
      },
      {
        title: 'E-Commerce Platform',
        description: 'A full-stack e-commerce platform with user authentication, product management, and payment integration.',
        image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=400&fit=crop&q=80',
        technologies: ['React', 'Spring Boot', 'MySQL', 'Redux'],
        liveUrl: 'https://daysmart.netlify.app/',
        githubUrl: 'https://github.com/username/ecommerce-platform',
        status:'ongoing',
        teamStatus:'solo'
      },
      {
        title: 'India Heritage & Monuments ',
        description: 'A platform dedicated to showcasing India’s rich heritage and monuments, featuring virtual tours, detailed information, and cultural insights.',
        image: 'https://previews.123rf.com/images/vectomart/vectomart1508/vectomart150800014/43569222-illustration-of-wavy-indian-flag-with-monument.jpg',
        technologies: ['React', 'Spring Boot', 'MySQL','Docker'],
        liveUrl: 'https://indiachronicles.netlify.app/explore',
        githubUrl: 'https://github.com/devchowdary/india-chronicles',
        status:'completed',
        teamStatus:'solo'
      },
      {
        title: 'online Donation System',
        description: 'An online donation system allows users to make, track, and manage donations to various causes securely through a web platform.',
        image: 'https://res.cloudinary.com/dmfdfcss6/image/upload/f_auto,q_auto/Screenshot_202025-01-29_20092140_unzexa',
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
