import { data } from 'autoprefixer'
import React from 'react'
import { FaWhatsapp, FaEnvelope, FaLocationArrow, FaPhone } from 'react-icons/fa'

const Footer = () => {
 const date = new Date().getFullYear();
  




  return (
    <div style={{display:'flex', 
    backgroundColor: 'aliceblue',
     justifyContent: 'center', alignItems:'center' }}>
 <div className='mt-10  border-t-2  border-t-red-500 border-b-red-500 border-b-2'>
  <h1 className='text-3xl'>Reach Me</h1>
  <hr />
    <p className='mb-2'><FaEnvelope  className='text-orange-600 text-3xl mb-2'/> Email: Ezeisraeloluoma123@gmail.com  </p>
    <p><FaPhone  className='text-orange-600 text-3xl'/> Phone: +2347061033459  </p>
    <a href='https://wa.me/+2347061033459' target='blank'>
    <FaWhatsapp  className='text-green-600 text-5xl text-center' /></a>
    <p>&copy;  {date} Eze Israel Oluomachukwu</p>
    <p>All rights reserved</p>
    <p>Next Imperial Computer Institute</p>
    <p> <FaLocationArrow /> Lagos State Nigeria </p>
 </div>
    </div>
  )
}

export default Footer