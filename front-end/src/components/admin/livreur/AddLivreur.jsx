import React from 'react'
import { Form } from 'react-bootstrap'
import { useState, useEffect, handleChange } from 'react'
import axios from 'axios'

const AddLivreur = () => {
  const[Villes, setVilles] = useState([])

  useEffect(()=> {
    axios.get("http://localhost:5000/api/showVille").then((Response) => {
   
    console.log(Response.data);
    setVilles(Response.data);
  }).catch((error)=>{
    console.log(error);
  });

  const handleChange = event => {
    console.log(event.target.value);
  };

  },[])

  return (
    <Form className='d-flex flex-column w-75 m-auto border border-1 rounded-1 border-success mx-auto p-4 '>
      <div className='d-flex flex-column mb-2'>
        <label className='ms-3' htmlFor="name">Full Name</label>
        <input className='bg-transparent border rounded-4 border-success h-50' type="text" id='name' />
      </div>
      <div className='d-flex flex-column mb-2'>
        <label className='ms-3' htmlFor="email">Email</label>
        <input className='bg-transparent border rounded-4 border-success' type="email" id='email' />
      </div>
      <div className='d-flex flex-column mb-2'>
        <label className='ms-3' htmlFor="phone">Phone Number</label>
        <input className='bg-transparent border rounded-4 border-success' type="tel" id='phone' />
      </div>
      <div className='d-flex flex-column mb-2'>
        <select onChange={handleChange} name="villes" id="selectVille" className=''>
        {
            Villes.map((ville, index) => (
              <option key={index} value={ville.name}>
                {ville.name}
              </option>
            ))
                  }
        </select>
      </div>
      <div className='text-end'>
        <button type="submit" className='addButton h-50 border rounded-2 p-2'>Save</button>
      </div>
    </Form>
  )
}

export default AddLivreur