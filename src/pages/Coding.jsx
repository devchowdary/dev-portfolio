import { Container, Box } from '@mui/material';
import CodingHeader from '../coding/CodingHeader';
import CodingProfiles from '../coding/CodingProfiles';

const Coding = () => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        pt: 12,
        pb: 8,
        background: '#121212',
      }}
    >
      <Container maxWidth="lg">
        <CodingHeader />
        <CodingProfiles />
      </Container>
    </Box>
  );
};

export default Coding;