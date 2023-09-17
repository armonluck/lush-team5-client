import React from "react";
import {
  Box,
  Heading,
  Flex,
  Spacer,
  Input,
  Button,
  FormControl,
  FormLabel,
  Stack,
  Select,
  Text,
  Image,
} from "@chakra-ui/react";
import { CloseIcon, StarIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

const ProductInfo = () => {
  return (
    <Box>
      <Box p={4}>
        <Heading as="h2" size="lg" mb={4}>
          Your Impact with Lush
        </Heading>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          viverra, est id varius dignissim, libero quam bibendum arcu.
        </Text>
      </Box>

      {/* Your Impact */}
      <Box p={4}>
        <Heading as="h2" size="lg" mb={4}>
          Your Impact
        </Heading>
        <Text>
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
          posuere cubilia Curae; Vivamus euismod arcu id neque vehicula
          consectetur.
        </Text>
      </Box>

      <Box p={4}>
        <Heading as="h2" size="lg" mb={4}>
          You Might Also Like
        </Heading>
        <RelatedProducts />
      </Box>
    </Box>
  );
};

export default ProductInfo;

const RelatedProducts = () => {
  const relatedProducts = [
    {
      id: 1,
      name: "Product 1",
      image: "product1.jpg",
    },
    {
      id: 2,
      name: "Product 2",
      image: "product2.jpg",
    },
  ];

  return (
    <Flex>
      {relatedProducts.map((product) => (
        <Box key={product.id} p={2} m={2} borderWidth="1px" borderRadius="md">
          <Heading as="h3" size="md" mt={2}>
            {product.name}
          </Heading>

        </Box>
      ))}
    </Flex>
  );
};
