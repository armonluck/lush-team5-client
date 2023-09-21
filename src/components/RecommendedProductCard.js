import React from 'react';
import { Box, Text, Image, Flex } from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons';

// Custom HalfStar component
// This component is responsible for rendering a half-filled star.
const HalfStar = ({ color }) => (
  <Box position="relative" display="inline-block" lineHeight="1">
    {/* Grayed out star as the background */}
    <StarIcon color="gray.300" boxSize="15px" />
    {/* Colored half star */}
    <Box
      position="absolute"
      top="0"
      left="0"
      width="50%"
      height="100%"
      overflow="hidden"
      zIndex="1"
    >
      <StarIcon color={color} boxSize="15px" />
    </Box>
  </Box>
);

// ProductCard component
// This component is responsible for rendering a single product card.
const ProductCard = ({ name, item, image, description, rating, textStyles }) => {
  // Calculate the number of full stars, half stars, and empty stars
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5 ? 1 : 0;
  const emptyStars = 5 - fullStars - halfStar;

  // Destructure the text styles
  const { productItem: itemStyle, productTitle: titleStyle, productDescription: descriptionStyle } = textStyles;

  return (
    <Box 
      width="215px" 
      textAlign="center" 
      bg="#F3F2F3"
      margin="0 10px 0 0"
    >
      {/* Product Image */}
      <Flex justifyContent="center" alignItems="center" mb={4}>
        <Image
          src={image}
          alt={name}
          width="180px"
          height="180px"
          objectFit="cover"
          style={{ filter: 'drop-shadow(0px 4px 6px rgba(0, 0, 0, 0.5))' }}
        />
      </Flex>
      {/* Star Rating */}
      <Flex justifyContent="center" alignItems="center" mt={2} mb={4}>
        {Array(fullStars).fill('').map((_, i) => (
          <StarIcon key={i} color="black" boxSize="15px" />
        ))}
        {halfStar ? <HalfStar color="black" /> : null}
        {Array(emptyStars).fill('').map((_, i) => (
          <StarIcon key={i + fullStars + halfStar} color="gray.300" boxSize="15px" />
        ))}
      </Flex>
      {/* Product Details */}
      <Flex flexDirection="column" alignItems="center" mb={2} mt={4}>
        <Text {...itemStyle}>{item}</Text>
        <Text {...titleStyle}>{name}</Text>
        <Text {...descriptionStyle}>{description}</Text>
      </Flex>
    </Box>
  );
};

// Export the ProductCard component
export default ProductCard;
