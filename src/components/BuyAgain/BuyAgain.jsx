import { Flex, Text, VStack } from '@chakra-ui/react';
import BuyAgainIcon from '../../assets/icons/ic_round-repeat.svg';
import './BuyAgain.scss'

const BuyAgain = () => {
    const flexBoxStyle = {
        w: '101px',
        h: '112px',
        p: '8px 15px 10px 16px',
        bg: '#E2D7FC',
        color: '#000', 
        boxShadow: '-4px 5px 14px 0px rgba(0, 0, 0, 0.15)',
        borderRadius: '10px'
    };

    return(
        <Flex sx={flexBoxStyle}>
            <VStack spacing={0} gap='10px' m='auto'>
                <Text fontFamily='Lush Handwritten' fontSize='12px'>Buy Again</Text>
                <img className='buyAgainIcon' src={BuyAgainIcon} alt='Buy Again'/>
            </VStack>
        </Flex>
    );
};

export default BuyAgain;