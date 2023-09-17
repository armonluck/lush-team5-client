import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import LoginPage from './pages/LoginPage';
import ProductDetails from './pages/ProductDetail/ProductDetails';
import './styles/_globals.scss';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element='' />
        <Route path='/login' element={<LoginPage/>} />
        <Route path='/scan' element={<ProductDetails/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
