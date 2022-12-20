import React from 'react'

export default function addLivreurForm() {
  return (
   <div className='d-flex w-100 h-100'>
       <div className='d-flex flex-column w-100 border border-1 rounded-1 border-success mt-3' id="Add">
      
      <button className= {(!add)?'d-block w-25 m-auto my-3':'d-none'} onClick={()=>setAdd(true)}>Add</button>

      <div className={(add)?'d-flex flex-column w-100 border border-1 rounded-1':'d-none'}>
      <div className='d-flex flex-row justify-content-evenly'>
      <div className='col-4'>
        <input type={'text'} className='' id="name" placeholder='full name' />
      </div>
      <div className='col-3'>
      <input type={'email'} className='' id="email" placeholder='email' />
      </div>
      <div className='col-3'>
      <input type={'tel'} className='' id="phone" placeholder='phone number' />
      </div>
      </div>
      <div className='d-flex flex-row justify-content-evenly'>
      <div className='col-4'>
        <select name="ville" id="ville" className='w-100' >
          <option value="1">Rabat</option>
          <option value="2">youssoufia</option>
        </select>
      </div>
      <div className='col-4'>
      <select name="status" id="status" className='w-100' >
          <option value="1">pending</option>
          <option value="2">active</option>
        </select>
      </div>
      <div className='d-flex flex-column col-2'>
        <button className='d-block w-75' onClick={()=>setAdd(false)}>save</button>
      </div>
  </div>
  </div>
  </div>
   </div>
  )
}
