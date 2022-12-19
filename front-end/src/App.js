import { Container } from "react-bootstrap";
import {Routes , Route } from 'react-router-dom'
import Home from './components/Home'
import Store from './components/Store'
import About from './components/About'
import Navbar from "./components/Navbar";
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
      </Routes>
   </Container>
   </ShoppingCarteProvider>
  );
}

export default App;
