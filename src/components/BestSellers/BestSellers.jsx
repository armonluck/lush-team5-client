import { Box } from '@chakra-ui/react';
import BestSellersImage from '../../assets/icons/Best Sellers.png';
import './BestSellers.scss'

const BestSellers = () => {
    return(
        <Box className='bestSellersContainer'>
            <img className='bestSellersImage' src={BestSellersImage} alt='Best Sellers'></img>

        </Box>
    );
};

export default BestSellers;