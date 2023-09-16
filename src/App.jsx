import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import StatusBar from './components/StatusBar/StatusBar';
import LoginPage from './pages/LoginPage/LoginPage';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import QueuePage from './pages/QueuePage/QueuePage';
import './styles/_globals.scss';

function App() {
  return (
    <BrowserRouter>
    <StatusBar />
      <Routes>
        <Route path='/' element='' />
        <Route path='/login' element={<LoginPage/>} />
        <Route path='/profile' element={<ProfilePage />} />
        <Route path='/queue' element={<QueuePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
