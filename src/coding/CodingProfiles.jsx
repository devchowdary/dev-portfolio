import React from 'react';
import { Grid, Box } from '@mui/material';
import ProfileCard from './ProfileCard';
import CodeChefProfileCard from './CodeChefProfileCard';

const CodingProfiles = () => {
  const profiles = [
    {
      platform: 'LeetCode',
      username: 'devendraprasad',
      logo: 'https://leetcode.com/_next/static/images/logo-dark-c96c407d175e36c81e236fcfdd682a0b.png',
      profileUrl: 'https://leetcode.com/devendraprasad/',
    },
    {
      platform: 'CodeChef',
      username: 'devchowdary',
      logo: 'https://s3.amazonaws.com/codechef_shared/misc/fb-image-icon.png',
      profileUrl: 'https://www.codechef.com/users/devchowdary',
    }
  ];

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '',    // Center vertically
        // background: '#f5f5f5',  // Background color (optional)
        p: 4
      }}
    >
      <Grid container spacing={4} justifyContent="center" alignItems="center">
        <Grid item xs={12} sm={6} md={4}>
          <ProfileCard
            platform={profiles[0].platform}
            username={profiles[0].username}
            logo={profiles[0].logo}
            profileUrl={profiles[0].profileUrl}
          />
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <CodeChefProfileCard
            platform={profiles[1].platform}
            username={profiles[1].username}
            logo={profiles[1].logo}
            profileUrl={profiles[1].profileUrl}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default CodingProfiles;
