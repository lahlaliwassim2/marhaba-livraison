import React from 'react'
import { useState } from 'react'
import { Container } from 'react-bootstrap'


const ShowLivreur = () => {

  const [update, setUpdate] = useState(false)
  return (
    <>
     
    

   <Container className='d-flex flex-column w-100 m-auto border border-1 rounded-1 border-success mt-5 '>
   <div className='d-flex flex-row justify-content-evenly'>
       <div className='col-4'>
         <input type={'text'} className='' value={"nom et prénom"} id="name" disabled={(!update)?'disabled':''}  />
       </div>
       <div className='col-3'>
       <input type={'email'} className='' value={"nom.prenom00@gmail.com"} id="email" disabled={(!update)?'disabled':''}  />
       </div>
       <div className='col-3'>
       <input type={'tel'} className='' value="+212-631.982008" id="phone" disabled={(!update)?'disabled':''}  />
       </div>
   </div>
   
   </Container>

  
   </>
  )
}

export default ShowLivreur