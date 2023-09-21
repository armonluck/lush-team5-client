// Importing required modules and components
import React, { useState, useEffect } from 'react';
import { Box, Text, Image, Button, VStack, Flex, useDisclosure } from '@chakra-ui/react';
import DeleteIcon from '../assets/icons/mdi_trash-can-outline.png';
import QuantityDrawer from './CheckoutQuantityDrawer';
import B1 from '../assets/bathbombs/Bathbomb_1-transformed.png';
import B4 from '../assets/bathbombs/Bathbomb_4-transformed.png';
import B9 from '../assets/bathbombs/Bathbomb_9-transformed.png';
import B5 from '../assets/bathbombs/Charity_Pot.png';
import B10 from '../assets/bathbombs/Sleepy_Cream1.png';
import CheckoutImpactAccordion from './CheckoutImpactAccordion';
import CheckoutCartSummary from './CheckoutCartSummary';
import RecommendedProducts from './RecommendedProducts';
import ChevronDownIcon from '../assets/icons/Vector3x.png';
import StickyCheckoutButton from './StickyCheckoutButton';

// Title Styles
const titleStyles = {
  fontSize: '30px',
  fontWeight: 700,
  lineHeight: '43px',
  letterSpacing: '0em',
  width: '100%',
  textAlign: 'left',
  margin: '8px 0',
  marginLeft: '16px',
  cursor: 'pointer',
  color: 'white',
};

// CheckoutProductCard Component
// Represents a single product card in the checkout process.
function CheckoutProductCard({
  productId,
  initialQuantity,
  price,
  weight,
  image,
  onQuantityChange,
  totalAmount,
  productname,
  productsubtitle,
}) {
  const [quantity, setQuantity] = useState(initialQuantity);
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    onQuantityChange(productId, quantity);
  }, [quantity]);

  const handleDrawerSubmit = (newQuantity) => {
    setQuantity(newQuantity);
    onQuantityChange(productId, newQuantity);
  };

  return (
    <Box borderWidth="1px" borderRadius="8px" p={4} m={0} w="100%" h="124px" position="relative" backgroundColor="#F3F2F3">
      <Flex justifyContent="space-between" alignItems="center">
        <Box boxSize="60px" position="absolute" top="12px" left="16px">
          <Image boxSize="100%" objectFit="contain" src={image} alt="Product" />
        </Box>
        <VStack alignItems="left" spacing="0" ml="76px" mt="-25px">
          <Text fontFamily="Lush Handwritten" fontSize="18px" fontWeight="700" lineHeight="26px" letterSpacing="0em" textAlign="left">{productname}</Text>
          <Text fontFamily="Helvetica" fontSize="12px" fontWeight="400" lineHeight="14px" letterSpacing="0.06em" textAlign="left">{productsubtitle}</Text>
        </VStack>
        <Flex mt="60px" ml="0px" alignItems="center" justifyContent="flex-start">
          <Box style={{ marginLeft: '-16.5rem' }}>
            <div
              style={{
                position: 'absolute',
                right: '20rem',
                top: '78%',
                transform: 'translateY(-50%)',
                width: '48px',
                height: '30px',
                borderRadius: '5px',
                boxShadow: '0px 4px 4px 0px #00000040',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
              }}
              onClick={onOpen}
            >
              <span style={{ fontSize: '10px', marginBottom: '-1.9px' }}>X</span>
              <span className="select-quantity-number" style={{ marginRight: '4px' }}>
                {quantity}
              </span>
              <img
                src={ChevronDownIcon}
                alt="Custom Chevron Icon"
                style={{
                  width: '10px',
                  height: '6px',
                  marginTop: '-1px',
                  marginLeft: '4px',
                }}
              />
            </div>
            <QuantityDrawer
              isOpen={isOpen}
              onClose={onClose}
              onChange={handleDrawerSubmit}
              currentQuantity={quantity}
              productImage={image}
              productName={productname}
              productSubtitle={productsubtitle}
            />
          </Box>
          <Text
            className="product-weight"
            style={{
              position: 'absolute',
              right: '17rem',
              top: '4.7rem',
            }}
          >
            {weight}
          </Text>
        </Flex>
        <Button variant="link" position="absolute" top="12px" right={1} onClick={() => onQuantityChange(productId, 0)}>
          <Image src={DeleteIcon} alt="Delete Icon" width="16px" height="18px" />
        </Button>
        <Flex justifyContent="space-between" alignItems="flex-end">
          <Box flex="1" textAlign="right">
            <Text
              className="product-cost"
              style={{
                textAlign: "center",
                position: "absolute",
                bottom: "2px",
                right: "3px",
                color: productId !== 'total' ? '#262626' : undefined
              }}
            >
              {productId !== 'total' ? `$${(price * quantity).toFixed(2)}` : `Total: $${totalAmount.toFixed(2)}`}
            </Text>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
}

// App Component
// The main component that renders the entire application.
const App = () => {
  // State to hold the list of products
  const [products, setProducts] = useState([
    { id: 1, quantity: 1, price: 19, weight: '180g', image: B1, productname: 'Lord Of Misrule', productsubtitle: 'Bath Bomb' },
    { id: 2, quantity: 1, price: 33, weight: '240g', image: B5, productname: 'Charity Pot', productsubtitle: 'Body Lotion' },
    { id: 3, quantity: 1, price: 29, weight: '210g', image: B10, productname: 'Sleepy', productsubtitle: 'Body Lotion' },
    { id: 4, quantity: 1, price: 15.5, weight: '180g', image: B4, productname: 'Brightside', productsubtitle: 'Bathbomb' },
    { id: 5, quantity: 1, price: 8, weight: '180g', image: B9, productname: 'Bat Rat', productsubtitle: 'Bath Bomb' },
  ]);

  // Calculate the total number of items in the bag
  const totalItemsInBag = products.reduce((acc, product) => acc + product.quantity, 0);

  const handleQuantityChange = (productId, newQuantity) => {
    let newProducts;
    if (newQuantity === 0) {
      // Remove the product with the given productId
      newProducts = products.filter(product => product.id !== productId);
    } else {
      // Update the quantity of the product with the given productId
      newProducts = products.map((product) => {
        if (product.id === productId) {
          return { ...product, quantity: parseInt(newQuantity, 10) };
        }
        return product;
      });
    }
    setProducts(newProducts);
    console.log("Updated Products:", newProducts);  // Debugging line
  };

  useEffect(() => {
    const ids = products.map(p => p.id);
    const hasDuplicates = ids.some((id, index) => ids.indexOf(id) !== index);
    if (hasDuplicates) {
      console.warn("Duplicate IDs found in products array.");
    }
  }, [products]);

  return (
    <VStack spacing={4} w="100%" backgroundColor="#282121" p={0} m={0}>
      <Text fontSize="30px" fontWeight={700} lineHeight="43px" letterSpacing="0em" width="100%" textAlign="center" margin="8px 0" marginLeft="16px" cursor="pointer" color="white">
        My Bag ({totalItemsInBag} {totalItemsInBag === 1 ? 'item' : 'items'})
      </Text>

      {/* Product Cards */}
      {products.map((product) => (
        <CheckoutProductCard
          key={product.id}
          productId={product.id}
          initialQuantity={product.quantity}
          weight={product.weight}
          price={product.price}
          image={product.image}
          productname={product.productname}
          productsubtitle={product.productsubtitle}
          onQuantityChange={handleQuantityChange}
          products={products}
        />
      ))}

      {/* CartSummary component with subtotal */}
      <CheckoutCartSummary products={products} />

      {/* Impact Accordion */}
      <Box w="100%" mb="-2rem" backgroundColor="#282121">
        <CheckoutImpactAccordion />
      </Box>

      {/* Recommended Products */}
      <Text style={titleStyles}>
        You Might Also Like
      </Text>
      <Box w="100%" mb="4rem" bg="#F3F2F3" borderRadius="10px">
        <RecommendedProducts />
      </Box>

      {/* Checkout Button */}
      <Box
        w="100%"
        mt={4}
        mb={4}
        backgroundColor="#282121"
        d="flex"
        flexDirection="column"
        justifyContent="flex-end"
        alignItems="center"
      >
        <StickyCheckoutButton products={products} p="0" m="0" />
      </Box>
    </VStack>
  );
};

export default App;
