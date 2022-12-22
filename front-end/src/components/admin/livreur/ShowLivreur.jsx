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
   <div className='d-flex flex-row justify-content-evenly'>
       <div className='col-4'>
         <select name="ville" id="ville" className='w-100' disabled={(!update)?'disabled':''}>
           <option value="1">Rabat</option>
           <option value="2">youssoufia</option>
         </select>
       </div>
       <div className='col-4'>
       <select name="status" id="status" className='w-100' disabled={(!update)?'disabled':''}>
           <option value="1">pending</option>
           <option value="2">active</option>
         </select>
       </div>
       <div className='d-flex flex-column col-2'>
         <button className='w-75' onClick={()=>setUpdate(true)}>update</button>
         <button className={(!update)?'d-none':'d-block w-75'} onClick={()=>setUpdate(false)}>save</button>
       </div>
   </div>
   </Container>

   
  
     
   
     
   </>
  )
}

export default ShowLivreur