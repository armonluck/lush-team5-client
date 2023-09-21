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
import ScrollablePicker from './ScrollWheel';

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
    <Box padding="0 1rem" background="#282121" textAlign="center" width="100vw">
      <Box display={isOpen ? 'block' : 'none'} position="fixed" zIndex="999" bg="#fff" p={4} boxShadow="0px 4px 12px rgba(0, 0, 0, 0.1)" w='100%' top='80px' left='0px'>
        <VStack spacing={4} width='100%'>
          <Image boxSize="60px" objectFit="contain" src={productImage} alt="Product" />
          <Text fontFamily="Lush Handwritten" fontSize="18px" fontWeight="700" lineHeight="26px" letterSpacing="0em" textAlign="left">{productName}</Text>
          <Text fontFamily="Helvetica" fontSize="12px" fontWeight="400" lineHeight="14px" letterSpacing="0.06em" textAlign="left">{productSubtitle}</Text>
          {/* <Text fontSize="12px" fontWeight="700">Quantity:</Text>
          <NumberInput value={quantity} onChange={handleInputChange} min={1}>
            <NumberInputField borderRadius="8px" borderTopLeftRadius="0" borderBottomLeftRadius="0" borderColor="#CACACA" borderWidth="1px" fontSize="14px" fontWeight="400" lineHeight="16px" letterSpacing="0.06em" textAlign="center" />
            <NumberInputStepper>
              <NumberIncrementStepper onClick={handleIncrement} />
              <NumberDecrementStepper onClick={handleDecrement} />
            </NumberInputStepper>
          </NumberInput> */}
          <ScrollablePicker value={quantity} onChange={handleInputChange} min={1} />
          <Flex justifyContent="center" width="100%">
            <Button onClick={handleSubmit} bg="#000" color="white" w='350px' _hover={{ bg: '#E66300' }} _active={{ bg: '#FF6B00' }}>
              Update
            </Button>
          </Flex>
        </VStack>
      </Box>
    </Box>
  );
};

export default QuantityDrawer;