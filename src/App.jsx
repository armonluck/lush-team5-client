import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import StatusBar from './components/StatusBar/StatusBar';
import LoginPage from './pages/LoginPage/LoginPage';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import QueuePage from './pages/QueuePage/QueuePage';
import AboutProduct from './components/AboutProduct';
import NavBar from './components/NavBar/NavBar'
import './styles/_globals.scss';
import {useState} from 'react'


function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [cart,setCart] =useState([]);

  return (
    <BrowserRouter>
    <StatusBar />
      <Routes>
        <Route
          path='/*'
          element={
            isLoggedIn ? (
              <>
                <NavBar isLoggedIn={isLoggedIn} cart={cart} />
                {/* Other routes */}
                <Route path='/' element=''/>
                <Route path='/profile' element={<ProfilePage isLoggedIn={isLoggedIn} />} />
                <Route path='/queue' element={<QueuePage />} />
                <Route path='/about-product' element={<AboutProduct />} />
              </>
            ) : (
              <Navigate to='/login' replace />
            )
          }
        />
      <Route path='/login' element={<LoginPage setLoggedIn={setLoggedIn} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


