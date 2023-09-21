import React, { useEffect } from 'react';
import { Flex, Box, VStack } from '@chakra-ui/react';
import B3 from '../assets/bathbombs/Bathbomb_3-transformed.png';
import B5 from '../assets/bathbombs/Bathbomb_5-transformed.png';
import B4 from '../assets/bathbombs/Bathbomb_4-transformed.png';
import ProductCard from './RecommendedProductCard';

const RecommendedProducts2 = () => {
  useEffect(() => {
    // Get a reference to the container element
    const container = document.getElementById('product-container');
    // Scroll to the top of the container with smooth animation
    if (container) {
      container.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  }, []);
  // product data
  const products = [
    { name: 'Twilight', item: 'Bathbomb', image: B3, description: 'Dreamy lavender froth', rating: 4 },
    { name: 'Intergalatic', item: 'Bathbomb', image: B5, description: 'Cosmic mint bathing', rating: 4.5 },
    { name: 'Brightside', item: 'Bathbomb', image: B4, description: 'Sunny, citrusy bubbles', rating: 5 },
  ];
  return (
    <VStack spacing={8} alignItems="center" p='10px'>
      {/* Container for the product cards */}
      <Box
        id="product-container"
        width="100%"
        maxW="100%"
        overflowX="auto"
        height="auto"
      >
        {/* Horizontal scroll container */}
        <Box overflowX="auto" marginLeft="-18px">
          {/* Flex container for product cards */}
          <Flex
            direction="row"
            py={4}
            marginLeft="-23px"
          >
            {/* Render each product card */}
            {products.map((product, index) => (
              <Box key={index} flexShrink={0} mx={1}>
                <ProductCard {...product} />
              </Box>
            ))}
          </Flex>
        </Box>
      </Box>
    </VStack>
  );
};
export default RecommendedProducts2;