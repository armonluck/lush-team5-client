import { Box, VStack, HStack, Text, Flex, Stat, StatNumber, Button, Drawer, DrawerOverlay, DrawerContent, DrawerBody, DrawerCloseButton } from '@chakra-ui/react';
import BathBombOne from '../../assets/icons/5b406c976228ca987cb13b9d272cec65.png';
import BathBombTwo from '../../assets/icons/Bathbomb_2-transformed.png';
import BathBombThree from '../../assets/icons/Bathbomb_4-transformed.png';
import './PurchasedItemBox.scss'

const PurchasedItemBox = ({ products }) => {
    // Calculate the subtotal amount for all products
    const subtotal = products?.reduce((acc, product) => acc + product?.price * product?.quantity, 0);
    // Calculate the sales tax (Assuming a 13% tax rate)
    const salesTax = subtotal ? subtotal * 0.13 : 0;
    // Calculate the total amount including tax
    const totalAmount = subtotal + salesTax;
    // Format the total amount to 2 decimal places
    const formattedTotalAmount = totalAmount !== undefined ? totalAmount.toFixed(2) : '0.00';

    const flexBoxStyle = {
        minW: '348px',
        minH: '124px',
        borderRadius: '10px',
        bg: 'var(--Item-Background, #F3F2F3)',
        boxShadow: '0px 5px 10px 0px rgba(0, 0, 0, 0.25)',
        position: 'relative',
        alignItems: 'flex-start',
        px: '20px'
    };

    return (
        <Flex sx={flexBoxStyle}>
            <HStack spacing={0}>
                {/* To be replaced with back-end data */}
                <Box position='relative'>
                    <img className='bathBombOne' src={BathBombOne} alt='Bath Bomb Item' />
                    <img className='bathBombTwo' src={BathBombTwo} alt='Bath Bomb Item' />
                    <img className='bathBombThree' src={BathBombThree} alt='Bath Bomb Item' />
                </Box>
                <VStack spacing={0}>
                    <Box pl='30px' justifyContent='flex-start'>
                        <Text className='purchase-date'>Purchase date</Text>
                        <Text className='purchase-date'>Sep 14, 2023</Text>
                        <Text color='#000' fontWeight='700' pt='12px'>
                            {isNaN(formattedTotalAmount) ? '$118.09' : formattedTotalAmount}
                        </Text>
                    </Box>
                </VStack>
            </HStack>
            <Text className='purchase-receipt'>View Receipt</Text>
        </Flex>
    );
};

export default PurchasedItemBox;