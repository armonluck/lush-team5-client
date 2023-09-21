import React from 'react';
import { Link } from 'react-router-dom';
import { Flex, Box, VStack } from '@chakra-ui/react';
import BestSellers from '../../components/BestSellers/BestSellers';
import BuyAgain from '../../components/BuyAgain/BuyAgain';
import LushLens from '../../components/LushLens/LushLens';

const ProfilePage = () => {
    return (
        <Box height='650px' background='var(--neutral-900, #282121)' pt='40px'>
            <Flex justifyContent='center'>
                <VStack spacing='12px'>
                    {/* <LushLens /> */}
                    <Link to={"/product"}>
                        <LushLens />
                    </Link>
                    <BuyAgain />
                    <BestSellers />
                </VStack>
            </Flex>
        </Box >
    )
}

export default ProfilePage;