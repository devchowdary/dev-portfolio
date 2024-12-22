import { Grid } from '@mui/material';
import ProfileCard from './ProfileCard';

const CodingProfiles = () => {
  const profiles = [
    {
      platform: 'LeetCode',
      username: 'devendraprasad',
      rating: 1485,
      rank: 'Guardian',
      problemsSolved: 135,
      totalProblems: 3399,
      contestRating: 1485,
      achievements: [
        'Solved 100 Hard Problems',
        'Weekly Contest Winner',
        '55 Days Coding Streak',
      ],
      logo: 'https://leetcode.com/_next/static/images/logo-dark-c96c407d175e36c81e236fcfdd682a0b.png',
      profileUrl:'https://leetcode.com/u/devendraprasad/'
    },
    {
      platform: 'CodeChef',
      username: 'devchowdary',
      rating: 1434,
      rank: '2★',
      problemsSolved: 290,
      totalProblems: 1200,
      contestRating: 1431,
      achievements: [
        'Div 4 Contest Winner',
        'Solved 280+ Problems',
        'Global Rank 1 in Challenge',
      ],
      logo: 'https://cdn.codechef.com/images/cc-logo.svg',
      profileUrl:'https://www.codechef.com/users/devchowdary'
    },
  ];

  return (
    <Grid container spacing={4}>
      {profiles.map((profile) => (
        <Grid item xs={12} md={6} key={profile.platform}>
          <ProfileCard {...profile} />
        </Grid>
      ))}
    </Grid>
  );
};

export default CodingProfiles;