
import React from 'react';
import { useState, useEffect } from 'react';
import { Flex, Text, Box, VStack } from '@chakra-ui/react';
import PurchasedItemBox from '../../components/PurchasedItemBox/PurchasedItemBox';
import ClockIcon from '../../assets/icons/ph_clock.svg';
import './QueuePage.scss'

const QueuePage = () => {
    const [remainingTime, setReaminingTime] = useState(3 * 60);
    const [estimatedWaitTime, setEstimatedWaitTime] = useState('3:00');

    useEffect(() => {
        const timer = setInterval(() => {
            if (remainingTime > 0) {
                // Calculate the minutes and seconds
                const minutes = Math.floor(remainingTime / 60);
                const seconds = remainingTime % 60;
                const formattedTime = `${minutes}:${String(seconds).padStart(2, '0')}`;

                // Update the state variables
                setReaminingTime(remainingTime - 1);
                setEstimatedWaitTime(formattedTime);
            } else {
                // Updates the message and clears timer when countdown reaches 0
                setEstimatedWaitTime('Your order is ready!');
                clearInterval(timer);
            }
        }, 1000);

        // Clears the timer when component unmounts
        return () => clearInterval(timer);
    }, [remainingTime]);

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
                    <Text fontFamily='Helvetica' color= 'white' fontSize='30px'>{estimatedWaitTime}</Text>
                </VStack>
            </VStack>
        </Flex>
    )
}

export default QueuePage;