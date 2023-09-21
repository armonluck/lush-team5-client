import ProductScan from '../../components/ProductScan/ProductScan';
import AboutProduct from '../../components/AboutProduct';
import RecommendedProducts2 from '../../components/RecommendedProducts2';
import { Box, Text } from '@chakra-ui/react';
import './ProductDetails.css';

function ProductDetails() {

  return (
    <Box bg='#282121' paddingBottom='20px'>
      <ProductScan />
      <AboutProduct />
      <Box mx='20px' mb="4rem" bg="#F3F2F3" borderRadius="10px">
        <RecommendedProducts2 />
      </Box>
    </Box>
  );
}

export default ProductDetails;