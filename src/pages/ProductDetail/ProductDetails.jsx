import React, { useRef, useEffect } from 'react';
import ProductScan from '../../components/ProductScan/ProductScan';
import LensVideo from '../../assets/video/lush-lens-demo.mov'
import AboutProduct from '../../components/AboutProduct';
import RecommendedProducts2 from '../../components/RecommendedProducts2';
import { Box, Text } from '@chakra-ui/react';
import './ProductDetails.css';

function ProductDetails() {

  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    if (video) {
      video.addEventListener('ended', () => {
        video.style.display = 'none';
      });
    }
  }, []);

  return (
    
    <Box bg='#282121' paddingBottom='20px'>
    <video ref={videoRef} src={LensVideo} width='100%' height="auto" autoPlay />
      <ProductScan />
      <AboutProduct />
      <Text>
        Similar Products
      </Text>
      <Box mx='20px' mb="4rem" bg="#F3F2F3" borderRadius="10px">
        <RecommendedProducts2 />
      </Box>
    </Box>
  );
}

export default ProductDetails;