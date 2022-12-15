import React from 'react'
import clientRightbar from './clientRightbar/clientRightbar'

export default function Client() {
  return (
    <div className='flex justify-end w-full'>
        <aside class="w-64" aria-label="Sidebar">
             <clientRightbar/>
        </aside>
   
    </div>
  )
}
