import React, { useEffect } from 'react';
import { Flex, Box, VStack } from '@chakra-ui/react';
import B6 from '../assets/bathbombs/Bathbomb_6-transformed.png';
import B7 from '../assets/bathbombs/Bathbomb_7-transformed.png';
import B8 from '../assets/bathbombs/Bathbomb_8-transformed.png';
import ProductCard from './RecommendedProductCard';

const RecommendedProducts = () => {
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
    { name: 'Lakes', item: 'Bathbomb', image: B7, description: 'Warm and Romantic', rating: 4.5 },
    { name: 'UFO', item: 'Bathbomb', image: B8, description: 'Neon lemondate soak', rating: 3.5 },
    { name: 'Magic Potion', item: 'Bathbomb', image: B6, description: 'Spellbinding Dragon Fruit Fizz', rating: 4 },
  ];
  return (
    <VStack spacing={8} alignItems="center">
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
export default RecommendedProducts;