import React from 'react';
import {
    Stack,
    Box,
    Flex,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Heading,
    Text,
    Highlight,
    Image,
    Button,
} from '@chakra-ui/react';

import images from './Images';
import '../styles/_fonts.scss';

function LoyaltyProgram() {
    return (
        <Box px='20px' bg='#282121'>
            <Heading as='h2' color='#E2D7FC' fontFamily='LushHandwritten-Bold' fontSize='30px' fontWeight='700' lineHeight='normal' pb='12px'>
                Loyalty Program
            </Heading>
            <Flex flexDir='column' justify='center' align='center'>
                <Image
                    zIndex='1'
                    // marginTop='12px'
                    // mx='70px'
                    borderRadius='full'
                    position='absolute'
                    boxSize='250px'
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
                    top='18px'
                    right='4px'
                    boxSize='235px'
                    src={images.Bubbles}
                    alt='Purple bubbles svg overlaying a bath bomb'
                />
                <Text color='#FFF' fontFamily='LushHandwritten-Bold' fontSize='40px' fontWeight='700' lineHeight='normal' zIndex='3' position='relative' bottom='100px'>
                    62%
                </Text>
            </Flex>

            <Box marginTop='-160px' padding='134px 20px 24px 20px' bg='#645C5C' borderRadius='20px' boxShadow='-4px 5px 14px 0px rgba(0, 0, 0, 0.15)'>
                <Text color='#B9A6F0' fontFamily='LushHandwritten-Bold' fontSize='18px' fontWeight='700' lineHeight='normal' textShadow='-4px 5px 14px rgba(255, 255, 255, 0.15);'>
                    This Week Only:
                </Text>
                <Card
                    marginTop='17px'
                    direction='row'
                    overflow='hidden'
                    variant='unstyled'
                    borderRadius='0'
                    mb='20px'
                    bg='#645C5C'
                    color='#FFF'
                >
                    <Image
                        objectFit='cover'
                        w='60px'
                        h='60px'
                        mr='14px'
                        src={images.MisruleBathBomb}
                        alt='Lord of Misrule Bath Bomb from LUSH. Green and spherical with purple highlights throughout the bath bomb.'
                    />

                    <Stack>
                        <CardBody color='#FFF'>
                            <Heading fontFamily='LushHandwritten-Bold' fontSize='18px' lineHeight='normal' pb='4px'>
                                Lord of Misrule
                            </Heading>

                            <Text fontFamily='Helvetica' fontSize='12px' fontWeight='400' lineHeight='normal'>
                                50% of sale goes to Toronto Women's Shelter
                            </Text>
                            <Text fontFamily='Helvetica' fontSize='12px' fontWeight='400' lineHeight='normal'>
                                <Highlight
                                    query='Lush Points'
                                    styles={{ fontSize: '15px', lineHeight: 'normal', fontFamily: 'LushHandwritten-Bold', color: '#FFF' }}
                                >
                                    2x the Lush Points
                                </Highlight>
                            </Text>
                        </CardBody>

                        <CardFooter>
                        </CardFooter>
                    </Stack>
                </Card>

                <Flex justifyContent='space-between'>
                    <Button variant='unstyled' fontFamily='Helvetica' fontSize='12px' textDecoration='underline' fontWeight='400' color='#FFF' lineHeight='normal'>
                        Past History
                    </Button>
                    <Button variant='solid' borderRadius='5px' bg='#6252A4' boxShadow='-4px 5px 14px 0px rgba(0, 0, 0, 0.15)' color='#FFF' fontFamily='Helvetica' fontSize='15px' fontWeight='700' lineHeight='normal' padding='12px 10px'>
                        View Rewards
                    </Button>
                </Flex>
            </Box>
        </Box>
    )
}

export default LoyaltyProgram;
