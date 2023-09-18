import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import StatusBar from './components/StatusBar/StatusBar';
import LoginPage from './pages/LoginPage/LoginPage';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import QueuePage from './pages/QueuePage/QueuePage';
import NavBar from './components/NavBar/NavBar'
import './styles/_globals.scss';
import {useState} from 'react'


function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [cart,setCart] =useState([]);

  return (
    <BrowserRouter>
    <StatusBar />
    <NavBar isLoggedIn={isLoggedIn} cart={cart}/>
      <Routes>
        <Route path='/' element='' />
        <Route path='/login' element={<LoginPage setLoggedIn={setLoggedIn}/>} />
        <Route path='/profile' element={<ProfilePage isLoggedIn={isLoggedIn}/>} />
        <Route path='/queue' element={<QueuePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
