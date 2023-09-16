import { Flex, Text, VStack } from '@chakra-ui/react';
import onSaleIcon from '../../assets/icons/solar_dollar-bold-duotone.svg';
import BathBomb from '../../assets/icons/Bathbomb_5-transformed.png';

import './OnSale.scss';

const OnSale = () => {
    const flexBoxStyle = {
        w: '101px',
        h: '112px',
        p: '8px 17px 10px 17px',
        bg: '#E2D7FC',
        color: '#000', 
        boxShadow: '-4px 5px 14px 0px rgba(0, 0, 0, 0.15)',
        borderRadius: '10px'
    };

    return (
        <Flex sx={flexBoxStyle}>
            <VStack spacing={0} gap='10px' m='auto'>
                <Text fontFamily='Lush Handwritten' fontSize='12px'>On Sale</Text>
                <img className='onSaleIcon' src={BathBomb} alt='On Sale'/>
            </VStack>
        </Flex>
    );
};

export default OnSale;