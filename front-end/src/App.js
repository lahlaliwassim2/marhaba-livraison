import { Routes, Route } from "react-router-dom";
import CardProduct from "./components/client/cardProduct" 
import Register from "./components/auth/register" 
import Login from "./components/auth/login" 
export default function App() {
  return (
   <>
   <Routes>
      <Route path="/card" element={<CardProduct/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route />
      <Route />
   </Routes>
   </>
  )
}