
import React from 'react';
import { Flex, Box } from '@chakra-ui/react';
import BestSellers from '../../components/BestSellers/BestSellers';
import BuyAgain from '../../components/BuyAgain/BuyAgain';
import OnSale from '../../components/OnSale/OnSale';

const ProfilePage = () => {
    return (
        <Box height='100vh' background= 'var(--neutral-900, #282121)' pt='40px'>
            <Flex justifyContent='center' gap='24px' px='20px'>
                <BestSellers />
                <BuyAgain />
                <OnSale />
            </Flex>
        </Box>
    )
}

export default ProfilePage;