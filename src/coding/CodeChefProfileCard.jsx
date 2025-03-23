import React, { useEffect, useState } from 'react';
import { Box, Card, CardContent, Typography, LinearProgress, Button, CircularProgress } from '@mui/material';
import { Trophy, Globe, CheckCircle } from 'lucide-react';

const CodeChefProfileCard = ({ username, logo, profileUrl }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchCodeChefData = async () => {
      try {
        const response = await fetch(`https://codechef-api.vercel.app/handle/${username}`);
        if (!response.ok) throw new Error('Failed to fetch');

        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Failed to fetch data:', error);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchCodeChefData();
  }, [username]);

  if (loading) {
    return (
      <Card sx={{ p: 3, textAlign: 'center' }}>
        <CircularProgress />
        <Typography variant="body2" sx={{ mt: 2 }}>Loading...</Typography>
      </Card>
    );
  }

  if (error || !data) {
    return (
      <Card sx={{ p: 3, textAlign: 'center', background: '#ffebee' }}>
        <Typography variant="body2" color="error">Failed to load data</Typography>
      </Card>
    );
  }

  // Use the real-time solved problems from the API
  const total = 5000;
  const problemsSolved = parseInt(data.status) || 0; 
  const maxProblems = problemsSolved > 0 ? problemsSolved + 100 : 1000;  // Ensure progress shows correctly
  const progress = (problemsSolved / total) * 100;

  return (
    <Card
      sx={{
        height: '100%',
        background: 'rgba(255, 255, 255, 0.05)',
        backdropFilter: 'blur(10px)',
        transition: 'transform 0.3s ease-in-out, border 0.3s ease-in-out',
        border: '2px solid transparent',
        '&:hover': {
          transform: 'translateY(-5px)',
          border: '2px solid #ff4081',
        },
        borderRadius:'20px'
      }}
    >
      <CardContent sx={{ p: 3 }}>
        {/* Platform and Username */}
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 3, gap: 2 }}>
          <img src={logo} alt="CodeChef" style={{ width: 40, height: 40 }} />
          <Box>
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              CodeChef
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.7 }}>
              @{username}
            </Typography>
          </Box>
        </Box>

        {/* Problems Solved Progress */}
        <Box sx={{ mb: 3 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
            <Typography variant="body2">Problems Solved</Typography>
            <Typography variant="body2" sx={{ color: '#ff4081' }}>
              {/* {problemsSolved} */}
            536 / 5000
            </Typography>
          </Box>
          <LinearProgress
            variant="determinate"
            value={progress}
            sx={{
              height: 8,
              borderRadius: 4,
              bgcolor: 'rgba(255, 255, 255, 0.1)',
              '& .MuiLinearProgress-bar': {
                background: 'linear-gradient(45deg, #9c27b0, #ff4081)',
                borderRadius: 4,
              },
            }}
          />
        </Box>

        {/* Rank and Problems Solved */}
        <Box sx={{ display: 'flex', gap: 3, mb: 3 }}>
          <Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
              <Trophy size={16} />
              <Typography variant="body2">Country Rank</Typography>
            </Box>
            <Typography variant="h6" sx={{ color: '#ff4081', fontWeight: 600 }}>
              {data.countryRank}
            </Typography>
          </Box>

          <Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
              <Globe size={16} />
              <Typography variant="body2">Global Rank</Typography>
            </Box>
            <Typography variant="h6" sx={{ color: '#ff4081', fontWeight: 600 }}>
              {data.globalRank}
            </Typography>
          </Box>
        </Box>

        {/* View Profile Button */}
        <Box sx={{ mt: 3 }}>
          <Button
            variant="contained"
            color="primary"
            href={profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              background: 'linear-gradient(45deg, #9c27b0, #ff4081)',
              color: '#fff',
              fontWeight: 600,
              '&:hover': {
                background: 'linear-gradient(45deg, #ff4081, #ff9100)',
              },
              marginLeft:'80px'
            }}
          >
            View Profile
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default CodeChefProfileCard;
