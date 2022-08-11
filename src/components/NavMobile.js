import React from 'react';

import {IoClose} from 'react-icons/io5'

const NavMobile = ({setNavMobile}) => {
  return <nav className='w-full h-full   lg:hidden bg-[#251f3f] '>

<IoClose  onClick={()=>setNavMobile(false)} className='text-3xl absolute left-4 top-6 cursor-pointer'/>
<ul className='item-center font-secondry justify-center h-full space-y-8 flex flex-col items-center space-x-12 font-secondary'>
      <li className='text-lg' ><a href="#"></a>Home</li>
      <li className='text-lg' ><a href="#"></a>Company</li>
      <li className='text-lg' ><a href="#"></a>Feature</li>
      <li className='btn'><a href="#"></a>Sign Up</li>
    </ul>
  </nav>;
};

export default NavMobile;
