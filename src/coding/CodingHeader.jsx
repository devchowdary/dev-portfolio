import { Box, Typography } from '@mui/material';

const CodingHeader = () => {
  return (
    <Box sx={{ textAlign: 'center', mb: 1}}>
      <Typography
        variant="h3"
        component="h2"
        sx={{
          fontWeight: 'bold',
          mb: 0,
          background: 'linear-gradient(45deg, #9c27b0, #ff4081, #ff9100)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        Coding Profiles
      </Typography>
      
      {/* <label><b>Note:-</b>The Following is not Real time data to Know More About My profiles Please <u><b style={{color:'red'}}>Click on View Profile</b>.</u></label> */}
    </Box>
  );
}

export default CodingHeader;