<<<<<<< HEAD
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ChakraProvider, Box } from '@chakra-ui/react';
import CircleSlider from './components/CircleSlider';
import CheckoutProductCard from './components/CheckoutProductCard';
import RecommendedProducts from './components/RecommendedProducts ';
import './chakra-ui-theme/lush-font.css';

function App() {
  return (
    <Router>
      <ChakraProvider>
            <Box className="App" padding="0 1rem" background="#282121" textAlign="center" width="100vw">
            <Routes>
                <Route path="/CircleSlider" element={<CircleSlider />} /> 
                <Route path="/CheckoutProduct" element={<CheckoutProductCard />} />
                <Route path="/RecommendedProducts" element={<RecommendedProducts />} />
              </Routes>
            </Box>
      </ChakraProvider>
    </Router>
=======
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element='' />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
