import React,{useState,useEffect} from "react";
import { Offcanvas, Stack } from "react-bootstrap";
import { useShoppigCart } from "../../context/ShoppingCarteContext";
import CartItem from "../cartItem/CartItem";
import FormatCurrency from "../formatCurrency";
import axios  from "axios";

const ShoppingCart = ({ isOpen }) => {
  
   useEffect(()=>{

    if(localStorage.getItem("shopping-cart")){
      const products =  JSON.parse(localStorage.getItem("shopping-cart"))
      console.log(products)
    }else{
      console.log('error')
    }
  
   },[])
  
  

  

//   const PassChek = ()=>{
//   if(localStorage.setItem("shopping-cart")){
//     const products =  JSON.parse(localStorage.getItem("shopping-cart"))
    
//     console.log(products)
//   }else{
//     console.log('erre')
//   }
// }

  let [product,setProduct] = useState([])
  useEffect(()=>{
    axios.get('http://localhost:5000/api/product/product')
    .then((res)=>{
      setProduct(res.data.allProduct)
      console.log(res.data)
    })
    .catch((err)=>{
      console.log(err.msg)
    })
  },[])
  const { closeCart, cartItems } = useShoppigCart();
  return (
    <Offcanvas show={isOpen} onHide={closeCart} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Stack gap={3}>
          {cartItems.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
          <div className="ms-auto fw-bold fs-5">
            Total{" "}
            {FormatCurrency(
              // cartItems.reduce((total, cartItem) => {
              //   // {/* const item = product.find((i) => i._id === cartItem.id); */}
              //   // {/* return total + (item?.price || 0) * cartItem.quantity;   */}
              // }, 0)
            )}
          </div>
          <div>
            <button className="ms-auto fw-bold fs-5">
              passe checkout
            </button >
          </div>
        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default ShoppingCart;
