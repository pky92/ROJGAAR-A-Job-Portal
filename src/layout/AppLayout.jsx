import React from 'react'
import { Outlet } from 'react-router-dom';

import Header from '@/components/Header';
import '../App.css'
const AppLayout = () => {
  return (
  <div>
 <div className='grid-background'></div>
 <main className='min-h-screen container'>
 <Header/>
 <Outlet/>

 </main>

 <div className='footer p-10 text-center mt-5 bg-gray-700'>all rights deserve @everyone</div>
  </div>

   
  )
}

export default AppLayout;