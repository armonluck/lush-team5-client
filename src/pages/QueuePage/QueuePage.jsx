
import React from 'react';
import { useState, useEffect } from 'react';
import { Card, Heading, Image, Flex, Text, Box, VStack } from '@chakra-ui/react';
import PurchasedItemBox from '../../components/PurchasedItemBox/PurchasedItemBox';
import ClockIcon from '../../assets/icons/ph_clock.svg';
import images from '../../components/Images';
import './QueuePage.scss';

const QueuePage = ({ products }) => {
    // Calculate the subtotal amount for all products
    const subtotal = products?.reduce((acc, product) => acc + product.price * product?.quantity, 0);
    // Calculate the sales tax (Assuming a 13% tax rate)
    const salesTax = subtotal ? subtotal * 0.13 : 0;
    // Calculate the total amount including tax
    const totalAmount = subtotal + salesTax;
    // Format the total amount to 2 decimal places
    const formattedTotalAmount = totalAmount !== undefined ? totalAmount.toFixed(2) : '0.00';

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
        <Flex background='var(--neutral-900, #282121)' color='#FFF' flexDir='column' pb='100px' pt='24px'>
            <VStack spacing={0}>
                <Text fontFamily='Lush Handwritten' color='#32BF00' fontSize='30px' pb='16px'>
                    Purchase Completed
                </Text>
                <PurchasedItemBox />
                <Box pt='24px' px='40px'>
                    <VStack spacing={0} alignItems='flex-start' gap='20px'>
                        <Text className='ready-message'>
                            <span className='ready-message__name'>Natasha</span>, Thanks for shopping at Lush!
                        </Text>
                        <Text className='ready-message'>
                            Keep shopping around, and we'll bring your order when its ready!</Text>
                    </VStack>
                </Box>

                <Box pt='24px' px='40px' bg='#282121'>
                    <Heading as='h2' color='#E2D7FC' fontFamily='Helvetica' fontSize='20px' fontWeight='400' lineHeight='normal' pb='12px'>
                        Order Status
                    </Heading>
                    <Flex flexDir='column' justify='center' align='center'>
                        <Image
                            zIndex='1'
                            // marginTop='12px'
                            // mx='70px'
                            borderRadius='full'
                            position='absolute'
                            boxSize='215px'
                            // boxShadow='-4px 5px 14px 0px rgba(255, 255, 255, 0.15)'
                            src={images.OrangeBathBomb}
                            alt='Orange circular bath bomb with swirl pattern'
                        />
                        <Image
                            zIndex='2'
                            position='relative'
                            // position='absolute'
                            // marginTop='10px'
                            // mx='74px'
                            top='20px'
                            right='4px'
                            boxSize='200px'
                            src={images.Bubbles}
                            alt='Purple bubbles svg overlaying a bath bomb'
                        />
                        <Text color='#FFF' fontFamily='LushHandwritten-Bold' fontSize='40px' fontWeight='700' lineHeight='normal' zIndex='3' position='relative' bottom='100px'>
                            62%
                        </Text>
                    </Flex>

                    <Text color='#FFF' fontFamily='Helvetica' fontWeight='400' fontSize='15px' lineHeight='normal'>
                        Hope you’re enjoying shopping! Should be another couple of minutes before your order is ready.
                    </Text>
                </Box>

                {/* <Text fontFamily='Helvetica' fontSize='30px' pt='43px' fontWeight='400'>
                    Estimated wait time
                </Text>
                <VStack spacing='24px' className='queue-number'>
                    <img className='ClockIcon' src={ClockIcon} alt='Clock' />
                    <Text fontFamily='Helvetica' color='white' fontSize='30px'>{estimatedWaitTime}</Text>
                </VStack> */}
            </VStack>
        </Flex>
    )
}

export default QueuePage;