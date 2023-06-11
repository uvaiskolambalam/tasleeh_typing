import {BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css';
import Login from './pages/login/Login';
import Home from './pages/home/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/' element={<Home />} />
          
        </Routes>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
