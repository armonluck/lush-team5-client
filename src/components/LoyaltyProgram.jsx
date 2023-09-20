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
        <Box p='20px' bg='#282121'>
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

            <Card
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
                    bg='#D9D9D9'
                    w='115px'
                    h='115px'
                    mr='1rem'
                    src=''
                    alt='Image of a store front'
                />

                <Stack>
                    <CardBody>
                        <Heading fontFamily='Helvetica' fontSize='1rem' lineHeight='normal' fontWeight='700' pb='4px'>
                        </Heading>

                        <Text fontFamily='Helvetica' fontSize='12px' fontWeight='400' lineHeight='normal' pb='24px'>
                        </Text>

                        <Text fontFamily='Helvetica' fontSize='12px' fontWeight='400' lineHeight='normal' >
                        </Text>

                        <Text fontFamily='Helvetica' fontSize='12px' fontWeight='400' lineHeight='normal' m='0'>
                        </Text>
                    </CardBody>
                    <CardFooter>
                    </CardFooter>
                </Stack>
            </Card>
        </Box>
    )
}

export default LoyaltyProgram;
