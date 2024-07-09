import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import Home from './components/Home';
import Cart from './components/cartItems';
import CheckOut from './components/checkOut';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Layout />} >
            <Route index element={<Home/>} />
            <Route path="cart" element={<Cart />} />
            <Route path="checkout" element={<CheckOut />} />
          </Route>
        </Routes>
      </Router>
     
    </div>
  );
}

export default App;
