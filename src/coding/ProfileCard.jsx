import { Box, Card, CardContent, Typography, LinearProgress, Button } from '@mui/material';
import { Trophy, Star, Code2 } from 'lucide-react';

const ProfileCard = ({
  platform,
  username,
  rating,
  rank,
  problemsSolved,
  totalProblems,
  contestRating,
  achievements,
  logo,
  profileUrl, // Added profile URL prop
}) => {
  const progress = (problemsSolved / totalProblems) * 100;

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
          border: '2px solid #ff4081', // Highlight border effect
        },
      }}
    >
      <CardContent sx={{ p: 3 }}>
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

        <Box sx={{ mb: 3 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
            <Typography variant="body2">Problems Solved</Typography>
            <Typography variant="body2" sx={{ color: '#ff4081' }}>
              {problemsSolved}/{totalProblems}
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

        <Box sx={{ display: 'flex', gap: 3, mb: 3 }}>
          <Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
              <Trophy size={16} />
              <Typography variant="body2">Rank</Typography>
            </Box>
            <Typography variant="h6" sx={{ color: '#ff4081', fontWeight: 600 }}>
              {rank}
            </Typography>
          </Box>
          {contestRating && (
            <Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                <Star size={16} />
                <Typography variant="body2">Rating</Typography>
              </Box>
              <Typography variant="h6" sx={{ color: '#ff4081', fontWeight: 600 }}>
                {contestRating}
              </Typography>
            </Box>
          )}
        </Box>

        <Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
            <Code2 size={16} />
            <Typography variant="body2">Recent Achievements</Typography>
          </Box>
          {achievements.map((achievement, index) => (
            <Typography
              key={index}
              variant="body2"
              sx={{
                opacity: 0.7,
                mb: 1,
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                '&::before': {
                  content: '""',
                  width: 4,
                  height: 4,
                  borderRadius: '50%',
                  bgcolor: '#ff4081',
                },
              }}
            >
              {achievement}
            </Typography>
          ))}
        </Box>

        {/* View Profile Button */}
        <Box sx={{ mt: 3 }}>
          <Button
            variant="contained"
            color="primary"
            href={profileUrl} // Redirect to the respective profile page
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              background: 'linear-gradient(45deg, #9c27b0, #ff4081)',
              color: '#fff',
              fontWeight: 600,
              '&:hover': {
                background: 'linear-gradient(45deg, #ff4081, #ff9100)',
              },
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
