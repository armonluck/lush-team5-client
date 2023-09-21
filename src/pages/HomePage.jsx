import React from 'react';
import LandingHeader from '../components/LandingHeader';
import CircleSlider from '../components/CircleSlider';
import ProfilePage from './ProfilePage/ProfilePage';
import LoyaltyProgram from '../components/LoyaltyProgram';
import { Box } from '@chakra-ui/react';

function HomePage() {
  return (
    <Box bg='#282121' paddingBottom='100px'>
        <LandingHeader />
        <CircleSlider />
        <ProfilePage />
        <LoyaltyProgram />
    </Box>
  )
}

export default HomePage;
