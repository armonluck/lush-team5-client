
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ProductDetails from './pages/ProductDetail/ProductDetails';
import StatusBar from './components/StatusBar/StatusBar';
import LoginPage from './pages/LoginPage/LoginPage';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import QueuePage from './pages/QueuePage/QueuePage';
import NavBar from './components/NavBar/NavBar'
import CheckoutProductCard from './components/CheckoutProductCard';
import HomePage from './pages/HomePage';
import { ChakraProvider } from '@chakra-ui/react';
import './chakra-ui-theme/lush-font.css';
import './styles/_globals.scss';
import { useState } from 'react';
import './App.css';


function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [cart, setCart] = useState([]);

  return (
    <BrowserRouter>
      <StatusBar />
      <ChakraProvider>
        {isLoggedIn ? <NavBar isLoggedIn={isLoggedIn} cart={cart} /> : null}
        {isLoggedIn ?
          (<Routes>
            <Route path='/' element={<Navigate to="login" />} />
            <Route path='/profile' element={<ProfilePage isLoggedIn={isLoggedIn} />} />
            <Route path='/home' element={<HomePage />} />
            <Route path='/product' element={<ProductDetails />} />
            <Route path='/queue' element={<QueuePage />} />
            <Route path="/checkout" element={<CheckoutProductCard />} />
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


