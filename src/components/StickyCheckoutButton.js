import React from 'react';
import ApplePayButton from '../assets/icons/ApplePayButton.png';
import {
  Button,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerBody,
  useDisclosure,
} from '@chakra-ui/react';
import ApplyPayCard from '../assets/bathbombs/Apple Pay.png';

const containerStyles = {
  zIndex: '10',
  width: '100%',
  position: 'fixed',
  bottom: '75px',
  left: '0',
  right: '0',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
};

const whiteBlockStyles = {
  width: '100%',
  padding: '8px 16px',
  borderRadius: '8px 8px 0 0',
  backgroundColor: 'white',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

const boxStyles = {
  width: '350px',
  height: 'auto',
  justifyContent: 'space-between',
  display: 'flex',
  fontWeight: '700',
  fontFamily: 'Helvetica',
  fontSize: '16px',
  lineHeight: '28px',
  letterSpacing: '0.05px',
  paddingBottom: '8px'
};

const buttonStyles = {
  width: '363px',
  height: 'auto',
  borderRadius: '8px',
  backgroundColor: 'black',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontWeight: '400',
  fontFamily: 'Helvetica',
  fontSize: '16px',
  lineHeight: '28px',
  letterSpacing: '0.05px',
  marginBottom: '8px',
};

const imageStyles = {
  maxWidth: '100%',
  maxHeight: '100%',
};

const StickyCheckoutButton = ({ products }) => {
  // Calculate the subtotal amount for all products
  const subtotal = products.reduce((acc, product) => acc + product.price * product.quantity, 0);

  // Calculate the sales tax (Assuming a 13% tax rate)
  const salesTax = subtotal ? subtotal * 0.13 : 0;

  // Calculate the total amount including tax
  const totalAmount = subtotal + salesTax;

  // Format the total amount to 2 decimal places
  const formattedTotalAmount = totalAmount !== undefined ? totalAmount.toFixed(2) : '0.00';

  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()

  return (
    <div style={containerStyles}>
      <div style={whiteBlockStyles}>
        {/* Display the total amount */}
        <div style={boxStyles}>
          <span className="CheckoutCartSummary">Total:</span>
          <span className="CheckoutCartSummary"> CAD ${formattedTotalAmount}</span>
        </div>

        {/* Render the sticky checkout button */}
        <Button style={buttonStyles} ref={btnRef} colorScheme='teal' onClick={onOpen}>
          <img src={ApplePayButton} alt="Apple Pay" style={imageStyles} />
        </Button>
      </div>

      <Drawer isOpen={isOpen} placement='bottom' onClose={onClose} finalFocusRef={btnRef}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerBody>
            <img
              src={ApplyPayCard}
              alt="Apple Pay Card"
              style={{
                width: '100%',
                height: 'auto',
                display: 'block',
                margin: '0 auto',
              }}
            />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default StickyCheckoutButton;