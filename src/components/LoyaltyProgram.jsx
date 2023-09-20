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
