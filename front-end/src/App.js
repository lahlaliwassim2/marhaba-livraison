import { Routes, Route } from "react-router-dom";
import CardProduct from "./components/client/cardProduct" 
export default function App() {
  return (
   <>
   <Routes>
      <Route path="/card" element={<CardProduct/>}/>
      <Route />
      <Route />
   </Routes>
   </>
  )
}