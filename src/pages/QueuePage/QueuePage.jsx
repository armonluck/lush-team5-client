
import React from 'react';
import { Flex, Text, Box, VStack } from '@chakra-ui/react';
import PurchasedItemBox from '../../components/PurchasedItemBox/PurchasedItemBox';
import './QueuePage.scss'

const QueuePage = () => {
    return (
        <Flex height='100vh' background= 'var(--neutral-900, #282121)' color='#FFF' p='24px 21px 0 21px'>
            <VStack spacing={0}>
                <Text fontFamily='Lush Handwritten' fontSize='30px' pb='16px'>
                Purchase Completed
                </Text>
                <PurchasedItemBox />
                <Box w='348px' h='auto' pt='24px'>
                    <VStack spacing={0} alignItems='flex-start' gap='20px'>
                        <Text className='ready-message'>
                            Thanks for shopping at Lush! 
                        </Text>
                        <Text className='ready-message'>
                            {/* Replace Franchesca with back-end user */}
                            <span className='ready-message__name'>Franchesca</span> is packing your order, so keep looking around, and we’ll come bring your order to you when it’s ready!
                        </Text>
                    </VStack>
                </Box>
                <Text fontFamily='Lush Handwritten' fontSize='40px' pt='43px'>
                    Est. Wait Time
                </Text>
                <Box className='queue-number'>
                    {/* Replace 3 with function...? */}
                    <Text fontFamily='Lush Handwritten' color= '#000' fontSize='40px'>3 Minutes</Text>
                </Box>
            </VStack>
        </Flex>
    )
}

export default QueuePage;