import axios from 'axios';
import React , {useState,useEffect}from 'react'
import Table from 'react-bootstrap/Table';


const ShowProduct = () => {
  // const base_url = 'http://localhost:5000/images/';
    let [product,setProduct] = useState([])

  useEffect(()=>{
     axios.get('http://localhost:5000/api/product/product')
    .then((res)=>{
      setProduct(res.data)

    })
    .catch((err)=>{
      console.log(err.msg)
    })
  },[])

  return (
    <div className='m-4 p-5 mx-auto'>
    <Table striped  bordered hover>
      <thead>
        <tr>
          <th>Image</th>
          <th>Title</th>
          <th>Descreption</th>
          <th>Price</th>
          <th>Categorie</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td></td>
          <td></td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>@mdo</td>
        </tr>
      </tbody>
    </Table>
    </div>  )
}
export default ShowProduct
