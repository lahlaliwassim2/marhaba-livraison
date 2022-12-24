import React ,{useState,useEffect} from "react";
import axios from 'axios'

function Statistique() {
  let [totalUser,setTotalUser] = useState([])
  let [totalorder,setTotalorder] = useState([])
  let [totalLivreur,settotalLivreur] = useState([])
  let [totalProduct,settotalProduct] = useState([])

  useEffect(()=>{
    axios.get('http://localhost:5000/api/statistic/totalusers')
    .then((res)=>{
      setTotalUser(res.data)
    })
    .catch((err)=>{
      console.log(err.msg)
    })

    axios.get('http://localhost:5000/api/statistic/totalorders')
    .then((res)=>{
      setTotalorder(res.data)
    })
    .catch((err)=>{
      console.log(err.msg)
    })

    axios.get('http://localhost:5000/api/statistic/totallivreurs')
    .then((res)=>{
      settotalLivreur(res.data)
    })
    .catch((err)=>{
      console.log(err.msg)
    })

    axios.get('http://localhost:5000/api/statistic/totalproducts')
    .then((res)=>{
      settotalProduct(res.data)
    })
    .catch((err)=>{
      console.log(err.msg)
    })
  },[])
  return (
    <div>
      <div class="d-flex m-4">
        <div class="w-100">
          <div class="container-fuild  mx-2 card-group mt-3">
            <div class=" card  bg-info me-2  border-0 p-3">
              <i class="bi bi-mortarboard fs-1 me-3o"></i>
              <p class="para fs-4">Total User</p>
              <p class="card-text text-end fs-2 fw-bold">{totalUser}</p>
            </div>

            <div class="card bg-info me-2 bodrder-0 border-white p-3">
              <i class="bi bi-bookmark fs-1 me-3"></i>
              <p class="para fs-4">Total Orders</p>
              <p class="card-text info fs-2 text-end fs-2 fw-bold">{totalorder}</p>
            </div>

            <div class=" card bg-info  me-2 bodrder-0 border-white p-3">
              <i class="bi bi-coin fs-1 me-3"></i>
              <p class="para fs-4">Total Livreur</p>
              <p class="card-text right text-end fs-2 fw-bold">
               {totalLivreur}
              </p>
            </div>

            <div class="card bg-info  me-2 bodrder-0 border-white p-3">
              <i class="bi bi-person fs-1 me-3 li c-light"></i>
              <p class="para1 fs-4">Total Product</p>
              <p class="card-text ri $lightht text-end fs-2 fw-bold">{totalProduct}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Statistique;
