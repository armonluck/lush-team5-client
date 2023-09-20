import React, { useState, useEffect } from 'react';
import { Box, Text, Image, Button, VStack, Flex, useDisclosure} from '@chakra-ui/react';
import DeleteIcon from '../assets/icons/mdi_trash-can-outline.png';
import QuantityDrawer from './CheckoutQuantityDrawer';
import B1 from '../assets/bathbombs/Bathbomb_1-transformed.png';
import B4 from '../assets/bathbombs/Bathbomb_4-transformed.png';
import B9 from '../assets/bathbombs/Bathbomb_9-transformed.png';
import B10 from '../assets/bathbombs/Sleepy_Cream.png';
import CheckoutImpactAccordion from './CheckoutImpactAccordion'; 
import CheckoutCartSummary from './CheckoutCartSummary';import RecommendedProducts from './RecommendedProducts ';
import ChevronDownIcon from '../assets/icons/Vector3x.png';
import StickyCheckoutButton from './StickyCheckoutButton';

// Title Styles
const titleStyles = {
    fontSize: '30px', 
    fontWeight: 700, 
    lineHeight: '43px', 
    letterSpacing: '0em', 
    width: "100%",
    textAlign: 'left',
    margin: '8px 0', 
    marginLeft: '16px',
    cursor: 'pointer',
    color: 'white', 
  };

// CheckoutProductCard Component
// Represents a single product card in the checkout process.
  function CheckoutProductCard({ productId, initialQuantity, price, weight, image, onQuantityChange, totalAmount, name, subtitle}) {
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
            <Image boxSize="100%" objectFit="cover" src={image} alt="Product" />
          </Box>
          <VStack alignItems="left" spacing="0" ml="76px" mt="-75px">
            <Text fontFamily="Lush Handwritten" fontSize="18px" fontWeight="700" lineHeight="26px" letterSpacing="0em" textAlign="left">{name}</Text>
            <Text fontFamily="Helvetica" fontSize="12px" fontWeight="400" lineHeight="14px" letterSpacing="0.06em" textAlign="left">{subtitle}</Text>
          </VStack>
          <Flex mt="60px" ml="0px" alignItems="center" justifyContent="flex-start">
            <Box style={{ marginLeft: '-16.5rem'}}>
              <div 
                style={{
                  position: 'relative',
                  width: '48px',
                  height: '30px',
                  borderRadius: '5px',
                  boxShadow: '0px 4px 4px 0px #00000040',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer'
                }}
                onClick={onOpen}
              >
                <span style={{ fontSize: '10px', marginBottom: '-1.9px' }}>X</span>
                <span style={{ fontSize: '12px', marginRight: '4px' }}>{quantity}</span>
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
                productName="Product Name" 
                productSubtitle="Product Subtitle" 
                />
            </Box>
            <Text fontFamily="Lato" fontSize="15px" fontWeight="900" lineHeight="18px" letterSpacing="0.04em" textAlign="left" color="#262626" ml="32px"mt="6px">{weight}</Text>
          </Flex>
          <Button variant="link" position="absolute" top="12px" right={1} onClick={() => onQuantityChange(productId, 0)}>
            <Image src={DeleteIcon} alt="Delete Icon" width="16px" height="18px" />
         </Button>
          <Flex justifyContent="space-between" alignItems="flex-end">
            <Box flex="1" textAlign="right">
              <Text
                fontFamily="Lato"
                fontSize="15px"
                fontWeight="900"
                lineHeight="18px"
                letterSpacing="0.04em"
                textAlign="center"
                position="absolute"
                bottom={2}
                right={3}
                color={productId !== 'total' ? '#262626' : undefined}
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
        { id: 1, quantity: 1, price: 19, weight: '180g', image: B1, name: 'Lord Of Misrule', subtitle: 'Bath Bomb' },
        { id: 2, quantity: 1, price: 33, weight: '240g', image: B10, name: 'Charity Pot', subtitle: 'Body Lotion'},
        { id: 3, quantity: 1, price: 29, weight: '210g', image: B10, name: 'Sleepy', subtitle: 'Body Lotion'},
        { id: 4, quantity: 1, price: 15.5, weight: '180g', image: B4, name: 'Brightside', subtitle: 'Bathbomb' },
        { id: 5, quantity: 1, price: 8, weight: '180g', image: B9, name: 'Bat Rat', subtitle: 'Bath Bomb' },
      ]);
      
    // Calculate the total number of items in the bag
    const totalItemsInBag = products.reduce((acc, product) => acc + product.quantity, 0);
  
    const handleQuantityChange = (productId, newQuantity) => {
        const newProducts = products.map((product) => {
          if (product.id === productId) {
            return { ...product, quantity: parseInt(newQuantity, 10) };
          }
          return product;
        });
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
            name={product.name}
            subtitle={product.subtitle}
            onQuantityChange={handleQuantityChange}
            products={products} 
        />
        ))}


  
        {/* CartSummary component with subtotal */}
        <CheckoutCartSummary products={products} />
        
        {/* Impact Accordion */}
        <Box w="100%" backgroundColor="#282121">
          <CheckoutImpactAccordion />
        </Box>
        {/* Recommended Products */}
        <Text fontSize="lg" style={titleStyles}>
          You Might Also Like
        </Text>
        <Box w="100%" mt={1} mb="10rem" bg="#F3F2F3"  borderRadius="10px">
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
            <StickyCheckoutButton products={products} p="0" m="0"/>
        </Box>
      </VStack>
    );
  };
  
  export default App;