import ProductScan from '../../components/ProductScan/ProductScan'
import ProductInfo from '../../components/ProductInfo/ProductInfo'
import { useEffect, useState } from 'react'
import './ProductDetails.css'

function ProductDetails() {
  
    return (
      <div>
        <ProductScan/>
        <ProductInfo />
      </div>
    );
  }
  
  export default ProductDetails;