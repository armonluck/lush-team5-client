
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import ProductDetails from './pages/ProductDetail/ProductDetails';
import StatusBar from './components/StatusBar/StatusBar';
import LoginPage from './pages/LoginPage/LoginPage';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import QueuePage from './pages/QueuePage/QueuePage';
import LandingHeader from './components/LandingHeader';
import AboutProduct from './components/AboutProduct';
import LoyaltyProgram from './components/LoyaltyProgram';
import NavBar from './components/NavBar/NavBar'
import CircleSlider from './components/CircleSlider';
import CheckoutProductCard from './components/CheckoutProductCard';
import RecommendedProducts from './components/RecommendedProducts ';
import { Box, ChakraProvider } from '@chakra-ui/react';
import './chakra-ui-theme/lush-font.css';
import './styles/_globals.scss';
import {useState} from 'react'


function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [cart,setCart] =useState([]);

  return (
    <BrowserRouter>
      <StatusBar />
      <ChakraProvider>
          {isLoggedIn ? <NavBar isLoggedIn={isLoggedIn} cart={cart}/> : null}
          {isLoggedIn ?
            (<Routes>
              {/* <Route path='/' element='' /> */}
              <Route path='/profile' element={<ProfilePage isLoggedIn={isLoggedIn} />} />
              <Route path='/queue' element={<QueuePage />} />
              <Route path='/about-product' element={<AboutProduct />} />
              <Route path='/landing' element={<LandingHeader />} />
              <Route path='/loyalty' element={<LoyaltyProgram />} />
              {/* TODO: move Box elsewhere, cannot be placed under routes, else results in an error */}
              {/* <Box className="App" padding="0 1rem" background="#282121" textAlign="center" width="100vw"> */}
                <Route path="/CircleSlider" element={<CircleSlider />} />
                <Route path="/CheckoutProduct" element={<CheckoutProductCard />} />
                <Route path="/RecommendedProducts" element={<RecommendedProducts />} />
              {/* </Box> */}
        </Routes>)
        :    
        (        
          <Routes>
              <Route path='/login' element={<LoginPage setLoggedIn={setLoggedIn} />} />
        </Routes>)
          }
      </ChakraProvider>
    </BrowserRouter>
  );
}

export default App;


