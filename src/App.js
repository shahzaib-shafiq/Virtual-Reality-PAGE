import React, { useEffect } from 'react';
import Banner from './components/Banner'
import Header from './components/Header'
import { useState } from 'react';
import NavMobile from './components/NavMobile'
import Experience from './components/Experience'
import Video from './components/Video'
import  Headsets from './components/Headsets'
import Testtimonial from './components/Testimonial'
import Explore from './components/Explore'

// import aos (animate on scroll)
import Aos from 'aos';
import 'aos/dist/aos.css';


 const App = () => {

// aos initialization
useEffect(() => {
  Aos.init({
    duration: 2500,
    delay: 400,
  });
});


  const [navMobile,setNavMobile] = useState(true)

  return <div className='relative overflow-hidden before:w-[600px] before:h-[200px] before:bg-circle before:bg-no-repeat before:absolute before:top:-16 before:left-[600px]  before:hidden before:lg:flex '>
<Header setNavMobile={setNavMobile}  />
    <Banner/>
    <div
        className={`${
          navMobile ? 'right-0' : '-right-full'
        } fixed top-0 bottom-0 w-48 transition-all`}
      >
        <NavMobile setNavMobile={setNavMobile} />
      </div>

      <Experience/>
      <Video/>
      <Headsets/>

<Testtimonial/>
<Explore/>
  </div>;
};

export default App;
