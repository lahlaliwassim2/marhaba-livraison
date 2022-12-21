import { Container } from "react-bootstrap";
import {Routes , Route } from 'react-router-dom'
import Home from './components/home/Home'
import Store from './components/store/Store'
import About from './components/about/About'
import Navbar from "./components/navbar/Navbar";
import Checkout from './components/checkout/checkout'
import ShoppingCarteProvider from './context/ShoppingCarteContext'
function App() {
  return (
   <ShoppingCarteProvider>
   <Navbar />
   <Container className="mb-4 <">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Store />} />
        <Route path="/about" element={<About />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
   </Container>
   </ShoppingCarteProvider>
  );
}

export default App;
