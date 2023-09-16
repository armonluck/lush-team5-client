import { Flex, Box, Text, VStack } from '@chakra-ui/react';
import BestSellersIcon from '../../assets/icons/mdi_fire.svg';
import LayerOne from '../../assets/icons/Rectangle 17.svg';
import LayerTwo from '../../assets/icons/Rectangle 18.svg';
import './BestSellers.scss'

const BestSellers = () => {
    const flexBoxStyle = {
        w: '101px',
        h: '112px',
        p: '8px 17px 10px 16px',
        bg: '#E2D7FC',
        color: '#000', 
        boxShadow:'-4px 5px 14px 0px rgba(0, 0, 0, 0.15)',
        borderRadius: '10px',
        position: 'relative'
    };

    return(
        <Flex sx={flexBoxStyle}>
            <VStack spacing={0} gap='10px' m='auto'>
                <Text className='bestSellers'>Best Sellers</Text>
                <img className='layerOne' src={LayerOne} alt='Best Sellers'/>
                <img className='layerTwo' src={LayerTwo} alt='Best Sellers'/>
                <img className='bestSellersIcon' src={BestSellersIcon} alt='Best Sellers'/>
            </VStack>
        </Flex>
    );
};

export default BestSellers;