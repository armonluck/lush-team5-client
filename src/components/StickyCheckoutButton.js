import React from 'react';
import ApplePayButton from '../assets/icons/ApplePayButton.png';

const containerStyles = {
  zIndex: '2', 
  width: '100%', 
  position: 'fixed', 
  bottom: '0', 
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
  height: '28px', 
  justifyContent: 'space-between', 
  display: 'flex', 
};

const buttonStyles = {
  width: '363px', 
  height: '35px',
  borderRadius: '8px', 
  backgroundColor: 'black', 
  display: 'flex', 
  justifyContent: 'center', 
  alignItems: 'center', 
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
  
    return (
      <div style={containerStyles}>
        <div style={whiteBlockStyles}>
          {/* Display the total amount */}
          <div style={boxStyles}>
            <span className="CheckoutCartSummary">Total</span>
            <span className="CheckoutCartSummary">${formattedTotalAmount}</span>
          </div>
  
          {/* Render the sticky checkout button */}
          <div style={buttonStyles}>
            <img src={ApplePayButton} alt="Apple Pay" style={imageStyles} />
          </div>
        </div>
      </div>
    );
  };
  
  export default StickyCheckoutButton;
