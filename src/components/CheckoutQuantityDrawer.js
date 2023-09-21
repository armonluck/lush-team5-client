import React, { useState } from 'react';
import {
  Box,
  Text,
  Image,
  Flex,
  Input,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Button,
  VStack,
  HStack,
} from '@chakra-ui/react';

const QuantityDrawer = ({ isOpen, onClose, onChange, currentQuantity, productImage, productName, productSubtitle }) => {
  const [quantity, setQuantity] = useState(currentQuantity);

  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const handleInputChange = (value) => {
    if (value >= 1) {
      setQuantity(value);
    }
  };

  const handleSubmit = () => {
    onChange(quantity);
    onClose();
  };

  return (
    <Box display={isOpen ? 'block' : 'none'} position="absolute" zIndex="999" bg="#fff" p={4} width="320px" boxShadow="0px 4px 12px rgba(0, 0, 0, 0.1)">
      <VStack spacing={4}>
        <Image boxSize="60px" objectFit="contain" src={productImage} alt="Product" />
        <Text fontFamily="Lush Handwritten" fontSize="18px" fontWeight="700" lineHeight="26px" letterSpacing="0em" textAlign="left">{productName}</Text>
        <Text fontFamily="Helvetica" fontSize="12px" fontWeight="400" lineHeight="14px" letterSpacing="0.06em" textAlign="left">{productSubtitle}</Text>
        <HStack spacing={2}>
          <Text fontSize="12px" fontWeight="700">Quantity:</Text>
          <NumberInput value={quantity} onChange={handleInputChange} min={1}>
            <NumberInputField borderRadius="8px" borderTopLeftRadius="0" borderBottomLeftRadius="0" borderColor="#CACACA" borderWidth="1px" fontSize="14px" fontWeight="400" lineHeight="16px" letterSpacing="0.06em" textAlign="center" />
            <NumberInputStepper>
              <NumberIncrementStepper onClick={handleIncrement} />
              <NumberDecrementStepper onClick={handleDecrement} />
            </NumberInputStepper>
          </NumberInput>
        </HStack>
        <Flex justifyContent="flex-end" width="100%">
          <Button onClick={handleSubmit} bg="#FF6B00" color="white" _hover={{ bg: '#E66300' }} _active={{ bg: '#FF6B00' }}>
            Update
          </Button>
        </Flex>
      </VStack>
    </Box>
  );
};

export default QuantityDrawer;
