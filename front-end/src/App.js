import { Container } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Store from "./components/store/Store";
import About from "./components/about/About";
import Navbar from "./components/navbar/Navbar"
import ShoppingCarteProvider from "./context/ShoppingCarteContext";
import Login from "./components/forms/login";
import Register from "./components/forms/register";

function App() {
  return (
    <ShoppingCarteProvider>
      <Navbar />
      <Container className="mb-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Container>
    </ShoppingCarteProvider>
  );
}

export default App;
