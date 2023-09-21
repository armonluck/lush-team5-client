import React from 'react';
import { Box, Text, Flex } from '@chakra-ui/react';

const CheckoutCartSummary = ({ products }) => {
  // Calculate the subtotal amount for all products
  const subtotal = products.reduce((acc, product) => acc + product.price * product.quantity, 0);

  // Calculate the sales tax (Assuming a 13% tax rate)
  const salesTax = subtotal ? subtotal * 0.13 : 0;

  // Calculate the total amount including tax
  const totalAmount = subtotal + salesTax;

  // Format the total amount to 2 decimal places
  const formattedTotalAmount = totalAmount.toFixed(2);

  // Format the tax amount to 2 decimal places
  const formattedTax = salesTax.toFixed(2);

  return (
    <Box p="0" borderRadius="lg" w="350px" marginBottom="8px">
      {/* Subtotal Display */}
      <Flex justifyContent="space-between">
        <Text color="white" className="CheckoutCartSummary">Subtotal</Text>
        <Text color="white" className="CheckoutCartSummary">${subtotal.toFixed(2)}</Text>
      </Flex>

      {/* Tax Display */}
      <Flex justifyContent="space-between">
        <Text color="white" className="CheckoutCartSummary">Tax</Text>
        <Text color="white" className="CheckoutCartSummary">${formattedTax}</Text>
      </Flex>

      {/* Total Amount Display */}
      <Flex justifyContent="space-between">
        <Text color="white" className="CheckoutCartSummary">Total</Text>
        <Text color="white" className="CheckoutCartSummary">${formattedTotalAmount}</Text>
      </Flex>
    </Box>
  );
};

export default CheckoutCartSummary;





