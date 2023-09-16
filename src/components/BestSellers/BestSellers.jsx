import { Flex, Text, VStack } from '@chakra-ui/react';
import BestSellersIcon from '../../assets/icons/mdi_fire.svg';
import './BestSellers.scss'

const BestSellers = () => {
    const flexBoxStyle = {
        w: '101px',
        h: '112px',
        p: '8px 17px 10px 16px',
        bg: '#D7D7D7',
        color: '#000', 
        boxShadow:'-4px 5px 14px 0px rgba(0, 0, 0, 0.15)'
    };

    return(
        <Flex sx={flexBoxStyle}>
            <VStack spacing={0} gap='10px' m='auto'>
                <Text fontFamily='Lush Handwritten' fontSize='12px'>Best Sellers</Text>
                <img className='bestSellersIcon' src={BestSellersIcon} alt='Best Sellers'/>
            </VStack>
        </Flex>
    );
};

export default BestSellers;