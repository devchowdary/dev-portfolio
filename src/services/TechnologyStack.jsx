import React from 'react';
import { Grid, Typography, Box } from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const TechnologyStack = ({ title, technologies }) => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <Box ref={ref} sx={{ mb: 4 }}>
      <motion.div
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        {/* <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 3, color: 'white', textAlign: 'center' }}>
          {title}
        </Typography> */}

        <Grid container spacing={4} sx={{ justifyContent: 'center' }}>
          {technologies.map((tech, index) => (
            <Grid item xs={6} sm={4} md={2} key={index} sx={{ textAlign: 'center' }}>
              <motion.div
                variants={itemVariants}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
              >
                <img
                  src={tech.logo}
                  alt={tech.name}
                  style={{ width: '60px', height: '60px', objectFit: 'contain' }}
                />
                <Typography variant="body2" sx={{ mt: 1, color: 'white' }}>
                  {tech.name}
                </Typography>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </motion.div>
    </Box>
  );
};

export default TechnologyStack;
