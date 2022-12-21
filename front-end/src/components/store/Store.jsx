import React, { useState, useEffect } from 'react'
import {Col, Row} from 'react-bootstrap'
// import storeItems  from '../../data/items.json'
import StoreItem from '../storeItem/StoreItem'
import axios from 'axios'

 
const Store = () => {
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
  
  return (
    <>
    <h2>Store</h2>
    <Row   >
      {product.map((item)=>(
        <Col key={item._id} className="m-3" >
          <StoreItem  {...item} />
        </Col>
      ))}
    </Row>
    </>
  )
}

export default Store