import { Grid } from '@mui/material';
import ServiceCard from './ServiceCard';
import { Code2, Database, Layout, Server, Smartphone, Globe } from 'lucide-react';

const ServicesGrid = () => {
  const services = [
    {
      title: 'Frontend Development',
      description: 'Building responsive and interactive user interfaces using React and modern JavaScript.',
      Icon: Layout
    },
    {
      title: 'Backend Development',
      description: 'Creating robust server-side applications with Spring Boot, JSP, and Servlets.',
      Icon: Server
    },
    {
      title: 'Database Design',
      description: 'Designing and implementing efficient database solutions using MySQL and MongoDB.',
      Icon: Database
    },
    {
      title: 'API Development',
      description: 'Developing RESTful APIs and microservices for seamless integration.',
      Icon: Code2
    },
    
    {
      title: 'Full Stack Solutions',
      description: 'End-to-end development from frontend to backend, ensuring scalable architecture.',
      Icon: Globe
    }
  ];

  return (
    <Grid container spacing={4}>
      {services.map((service) => (
        <Grid item xs={12} sm={6} md={4} key={service.title}>
          <ServiceCard {...service} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ServicesGrid;