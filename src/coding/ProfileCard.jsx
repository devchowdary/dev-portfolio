import React, { useEffect, useState } from 'react';
import { Box, Card, CardContent, Typography, LinearProgress, Button, CircularProgress } from '@mui/material';
import { Trophy, Code2 } from 'lucide-react';

const ProfileCard = ({ platform, username, logo, profileUrl }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchLeetCodeData = async () => {
      try {
        const response = await fetch(`https://leetcode-stats-api.herokuapp.com/${username}`);
        const result = await response.json();

        if (result.status === 'success') {
          setData(result);
        } else {
          setError(true);
        }
      } catch (error) {
        console.error('Failed to fetch data:', error);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchLeetCodeData();
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

  const progress = (data.totalSolved / data.totalQuestions) * 100;

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
          <img src={logo} alt={platform} style={{ width: 40, height: 40 }} />
          <Box>
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              {platform}
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.7 }}>
              @{username}
            </Typography>
          </Box>
        </Box>

        {/* Problems Solved */}
        <Box sx={{ mb: 3 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
            <Typography variant="body2">Problems Solved</Typography>
            <Typography variant="body2" sx={{ color: '#ff4081' }}>
              {data.totalSolved}/{data.totalQuestions}
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

        {/* Rank and Acceptance Rate */}
        <Box sx={{ display: 'flex', gap: 3, mb: 3 }}>
          <Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
              <Trophy size={16} />
              <Typography variant="body2">Rank</Typography>
            </Box>
            <Typography variant="h6" sx={{ color: '#ff4081', fontWeight: 600 }}>
              {data.ranking}
            </Typography>
          </Box>

          <Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
              <Code2 size={16} />
              <Typography variant="body2">Acceptance Rate</Typography>
            </Box>
            <Typography variant="h6" sx={{ color: '#ff4081', fontWeight: 600 }}>
              {data.acceptanceRate}%
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

export default ProfileCard;
