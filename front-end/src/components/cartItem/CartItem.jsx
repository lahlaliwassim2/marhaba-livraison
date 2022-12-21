import React,{useState,useEffect} from "react";
import { Stack, Button } from "react-bootstrap";
import { useShoppigCart } from "../../context/ShoppingCarteContext";
import FormatCurrency from "../formatCurrency";
import axios from "axios";
const base_url = 'http://localhost:5000/images/';

const CartItem = ({ _id, quantity }) => {
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
  
  const { removeFromCart } = useShoppigCart();
  const item = product.find((i) => i.id === _id);
  if (item == null) return null;
  return (
    <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
      <img
        src={base_url +item.image}
        alt="cart-img"
        style={{ width: "125px", height: "75px", objectFit: "cover" }}
      />
      <div className="me-auto">
        <div>
          {item.title}{" "}
          {quantity > 1 && (
            <span className="text-muted" style={{ fontSize: "0.65rem" }}>
              x{quantity}
            </span>
          )}
        </div>
        <div className="text-muted" style={{ fontSize: "0.75rem" }}>
          {FormatCurrency(item.price)}
        </div>
      </div>
      <div>{FormatCurrency(item.price * quantity)}</div>
      <Button
        variant="outline-danger"
        size="sm"
        onClick={() => removeFromCart(item._id)}
      >
        &times;
      </Button>
    </Stack>
  );
};

export default CartItem;
