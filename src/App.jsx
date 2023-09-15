import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import LoginPage from './pages/LoginPage';
import './styles/_globals.scss';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element='' />
        <Route path='/login' element={<LoginPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
