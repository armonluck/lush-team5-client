import React from 'react';
import { Box, Text, Image, Flex } from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons';
import '../components/ProductScan/ProductScan.scss';

// Custom HalfStar component
const HalfStar = ({ color }) => (
  <Box position="relative" display="inline-block" lineHeight="1">
    <StarIcon color="gray.300" boxSize="15px" />
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
const ProductCard = ({ name, item, image, description, rating }) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5 ? 1 : 0;
  const emptyStars = 5 - fullStars - halfStar;
  return (
    <Box
      width="215px"
      textAlign="center"
      bg="#F3F2F3"
      margin="0 10px 0 0"
      className="productItem"
    >
      <Flex justifyContent="center" alignItems="center" mb={4}>
        <Image
          src={image}
          alt={name}
          width="180px"
          height="180px"
          objectFit="contain"
          className="productImage"
        />
      </Flex>
      <Flex justifyContent="center" alignItems="center" mt={2} mb={4}>
        {Array(fullStars).fill('').map((_, i) => (
          <StarIcon key={i} color="black" boxSize="15px" />
        ))}
        {halfStar ? <HalfStar color="black" /> : null}
        {Array(emptyStars).fill('').map((_, i) => (
          <StarIcon key={i + fullStars + halfStar} color="gray.300" boxSize="15px" />
        ))}
      </Flex>
      <Flex flexDirection="column" alignItems="center" mb={2} mt={4}>
        <Text className="productItemText">{item}</Text>
        <Text color='#000' className="productTitle">{name}</Text>
        <Text color='#000' className="productDescription">{description}</Text>
      </Flex>
    </Box>
  );
};
export default ProductCard;