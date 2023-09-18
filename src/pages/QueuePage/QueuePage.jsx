
import React from 'react';
import { Flex, Text, Box, VStack } from '@chakra-ui/react';
import PurchasedItemBox from '../../components/PurchasedItemBox/PurchasedItemBox';
import ClockIcon from '../../assets/icons/ph_clock.svg';
import './QueuePage.scss'

const QueuePage = () => {
    return (
        <Flex height='100vh' background= 'var(--neutral-900, #282121)' color='#FFF' p='24px 21px 0 21px'>
            <VStack spacing={0}>
                <Text fontFamily='Lush Handwritten' color='#32BF00' fontSize='30px' pb='16px'>
                    Purchase Completed
                </Text>
                <PurchasedItemBox />
                <Box w='348px' h='auto' pt='24px'>
                    <VStack spacing={0} alignItems='flex-start' gap='20px'>
                        <Text className='ready-message'>
                            <span className='ready-message__name'>Natasha</span>, Thanks for shopping at Lush! 
                        </Text>
                        <Text className='ready-message'>
                            Keep shopping around, and we’ll bring your order when it’s ready!</Text>
                    </VStack>
                </Box>
                <Text fontFamily='Helvetica' fontSize='30px' pt='43px' fontWeight='400'>
                    Estimated wait time
                </Text>
                <VStack spacing='24px' className='queue-number'>
                    <img className='ClockIcon'src={ClockIcon} alt='Clock'/>
                    <Text fontFamily='Helvetica' color= 'white' fontSize='30px'>3 minutes</Text>
                </VStack>
            </VStack>
        </Flex>
    )
}

export default QueuePage;