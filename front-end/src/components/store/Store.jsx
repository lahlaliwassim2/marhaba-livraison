import React, { useState, useEffect } from 'react'
import {Col, Row} from 'react-bootstrap'
// import storeItems  from '../../data/items.json'
import StoreItem from '../storeItem/StoreItem'
import axios from 'axios'

 
const Store = () => {
  let [s,setProduct] = useState([])
useEffect(()=>{
  axios.get('http://localhost:5000/api/product/product')
  .then((res)=>{
    setProduct(res.data)
    console.log(res.data)
  })
  .catch((err)=>{
    console.log(err.msg)
  })
},[])
  
  return (
    <>
    <Row>
    
      {s.map((items)=>(
        <Col key={items.id} className="m-3" >
          <StoreItem  {...items} />
        </Col>
      ))}
      
    </Row>
    </>
  )
}

export default Store