import ProductScan from '../../components/ProductScan/ProductScan';
import AboutProduct from '../../components/AboutProduct';
import RecommendedProducts2 from '../../components/RecommendedProducts2';
import { Box, Heading } from '@chakra-ui/react';
import './ProductDetails.css';

function ProductDetails() {

  return (
    <Box bg='#282121' paddingBottom='100px'>
      <ProductScan />
      <AboutProduct />
      <Heading as='h2' color='#FFF' fontFamily='LushHandwritten-Bold' fontSize='18px' fontWeight='700' lineHeight='normal' mx='20px' mb='20px'>
        Similar Products
      </Heading>
      <Box mx='20px' mb="4rem" bg="#F3F2F3" borderRadius="10px">
        <RecommendedProducts2 />
      </Box>
    </Box>
  );
}

export default ProductDetails;