import { Box, VStack, Text, Flex } from '@chakra-ui/react';
import BathBombIcon from '../../assets/icons/5b406c976228ca987cb13b9d272cec65.png';
import './PurchasedItemBox.scss'

const PurchasedItemBox = () => {
    const flexBoxStyle = {
        w: '348px',
        h: '124px',
        borderRadius: '10px',
        bg: 'var(--Item-Background, #F3F2F3)',
        boxShadow: '0px 5px 10px 0px rgba(0, 0, 0, 0.25)',
        position: 'relative',
    };

    return (
        <Flex sx={flexBoxStyle}>
            {/* To be replaced with back-end data */}
            <img className='bathBombIcon'src={BathBombIcon} alt='Bath Bomb Item' />
            <VStack spacing={0}>
                <Box pt='16px' justifyContent='flex-start'>
                    <Text className='purchase-date'>Purchase date</Text>
                    <Text className='purchase-date'>Sep 14, 2023</Text>
                    <Text className='purchase-amount'>$18.00</Text>
                </Box>
            </VStack>
            <Text className='purchase-receipt'>View Receipt</Text>
        </Flex>
    );
};

export default PurchasedItemBox;