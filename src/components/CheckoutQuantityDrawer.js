// Importing required modules and components from Chakra UI and local files
import React, { useState } from 'react';
import {
  Box,
  Text,
  Image,
  Button,
  HStack,
  VStack,
  Flex,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Center,
} from '@chakra-ui/react';
import ScrollWheel from './ScrollWheel';

// CheckoutQuantityDrawer Component
// This component represents a drawer for selecting the quantity of a product in the checkout process.
const CheckoutQuantityDrawer = ({
  isOpen,
  onClose,
  onChange,
  onSave,
  currentQuantity,
  productImage,
  productName,
  productSubtitle,
}) => {
  // State to hold the selected quantity
  const [selectedQuantity, setSelectedQuantity] = useState(1);


  // Function to handle quantity change
  const handleChange = (newQuantity) => {
    setSelectedQuantity(newQuantity);
    onChange && onChange(newQuantity);
  };

  // Function to handle save action
  const handleSave = () => {
    console.log("Selected Quantity:", selectedQuantity);  
    console.log("onSave function:", onSave);  
    onSave && onSave(selectedQuantity);
    onClose();
  };
  
  
  

  return (
    <Drawer isOpen={isOpen} onClose={onClose} placement="bottom" size="50%">
      <DrawerOverlay>
        <DrawerContent>
          {/* Header Section */}
          {/* Contains the close button and product details */}
          <Box position="relative">
            <DrawerCloseButton position="absolute" top={2} right={2} zIndex="2" />
            <DrawerHeader mt={8}>
              <Flex justifyContent="flex-start" alignItems="center">
                <HStack>
                  <Image boxSize="50px" objectFit="cover" src={productImage} alt="Product" />
                  <VStack alignItems="start">
                    <Text fontWeight="bold">{productName}</Text>
                    <Text fontSize="sm">{productSubtitle}</Text>
                  </VStack>
                </HStack>
              </Flex>
            </DrawerHeader>
          </Box>

          {/* Body Section */}
          {/* Contains the ScrollWheel component for selecting quantity */}
          <DrawerBody mt={0} pt={0} pb={0}>
            <ScrollWheel onChange={handleChange} />
          </DrawerBody>

          {/* Footer Section */}
          {/* Contains the Save button */}
          <DrawerFooter justifyContent="center" pt={0} pb={0}>
            <Center w="100%" px={4}>
              <Button w="100%" bg="black" color="white" borderRadius="20px" p={4} mb={4} onClick={handleSave}>
                Save
              </Button>
            </Center>
          </DrawerFooter>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
};

// Export the CheckoutQuantityDrawer component
export default CheckoutQuantityDrawer;
