import React from 'react';
import { Flex, Box, VStack } from '@chakra-ui/react';
import BestSellers from '../../components/BestSellers/BestSellers';
import BuyAgain from '../../components/BuyAgain/BuyAgain';
import LushLens from '../../components/LushLens/LushLens';

const ProfilePage = () => {
    return (
        <Box height='100vh' background= 'var(--neutral-900, #282121)' pt='40px'>
            <Flex justifyContent='center'>
                <VStack spacing='12px' px='20px'>
                    <LushLens />
                    <BuyAgain />
                    <BestSellers />
                </VStack>
            </Flex>
        </Box>
    )
}

export default ProfilePage;