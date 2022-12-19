import React from 'react'
import {Col, Row} from 'react-bootstrap'
import storeItems  from '../../data/items.json'
import StoreItem from '../storeItem/StoreItem'

 
const Store = () => {
  return (
    <>
    <h2>Store</h2>
    <Row>
      {storeItems.map((item)=>(
        <Col key={item.id}>
          <StoreItem  {...item} />
        </Col>
      ))}
    </Row>
    </>
  )
}

export default Store