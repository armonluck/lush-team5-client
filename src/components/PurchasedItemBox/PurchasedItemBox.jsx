import { Box, VStack, HStack, Text, Flex } from '@chakra-ui/react';
import BathBombOne from '../../assets/icons/5b406c976228ca987cb13b9d272cec65.png';
import BathBombTwo from '../../assets/icons/Bathbomb_2-transformed.png';
import BathBombThree from '../../assets/icons/Bathbomb_4-transformed.png';
import './PurchasedItemBox.scss'

const PurchasedItemBox = () => {
    const flexBoxStyle = {
        w: '348px',
        h: '124px',
        borderRadius: '10px',
        bg: 'var(--Item-Background, #F3F2F3)',
        boxShadow: '0px 5px 10px 0px rgba(0, 0, 0, 0.25)',
        // padding: '17px 0 11px 28px',
        position: 'relative',
        alignItems: 'flex-start'
    };

    return (
        <Flex sx={flexBoxStyle}>
            <HStack spacing={0}>
                {/* To be replaced with back-end data */}
                <Box position='relative'>
                    <img className='bathBombOne'src={BathBombOne} alt='Bath Bomb Item' />
                    <img className='bathBombTwo'src={BathBombTwo} alt='Bath Bomb Item' />
                    <img className='bathBombThree'src={BathBombThree} alt='Bath Bomb Item' />
                </Box>
                <VStack spacing={0}>
                    <Box pl='30px' justifyContent='flex-start'>
                        <Text className='purchase-date'>Purchase date</Text>
                        <Text className='purchase-date'>Sep 14, 2023</Text>
                        <Text className='purchase-amount'>$37.50</Text>
                    </Box>
                </VStack>
            </HStack>
            <Text className='purchase-receipt'>View Receipt</Text>
        </Flex>
    );
};

export default PurchasedItemBox;