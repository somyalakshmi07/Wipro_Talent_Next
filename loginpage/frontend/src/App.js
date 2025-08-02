import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './login';
import Signup from './signup';
import Home from './home';
import Basic from './basic';
import Collections from './collections'; // Uncomment if you have a Collections component
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/Home" element={<Home/>} />
        <Route path="/basic" element={<Basic />} />
        <Route path="/collections" element={<Collections />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;