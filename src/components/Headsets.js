import React from 'react';
import head1 from '../assets/img/headset-1.png'
import head2 from '../assets/img/headset-2.png'
import head3 from '../assets/img/headset-3.png'
import head4 from '../assets/img/headset-4.png'

const Headsets = () => 
{
  return <section className='py-12 lg:py-24'>

    <div className='container mx-auto'>
<h2 
data-aos='fade-down'
data-aos-offset='300'
className='text-3xl font-bold mb-6' >Mixed Reality HeadSets </h2>
    <div className='grid grid-cols-2 lg:grid-cols-2  lg:gap-10 pb-3 py-4 my-5 gay-x-8 gap-y-4'>
      <div className='relative'
      data-aos='zoom-in'
      data-aos-offset='300'
      data-aos-delay='1000'


      >
        <img src={head1} alt="" />
      <div className='absolute bottom-0 bg-white/20 backdrop-blur-md m-w-[300px]  min-h-[150px] p-6'>

        
        <h4 className='font-semibold text-xl pb-3' >MetaVerse</h4>

        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis inventore perspiciatis animi praesentium est, veritatis quis nulla tempore, aliquid nihil illo placeat harum voluptates id quasi, quidem error autem. Placeat.</p>
        
      </div>
      </div>

      <div className='relative'
      data-aos='zoom-in'
      data-aos-offset='300'
      data-aos-delay='1300'

      
      >
        <img src={head2} alt="" />
      <div className='absolute bottom-0 bg-white/20 backdrop-blur-md m-w-[300px]  min-h-[150px] p-6'>

        
        <h4 className='font-semibold text-xl pb-3' >Megaverse</h4>

        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis inventore perspiciatis animi praesentium est, veritatis quis nulla tempore, aliquid nihil illo placeat harum voluptates id quasi, quidem error autem. Placeat.</p>
        
      </div>
      </div>
      <div className='relative'
      
      data-aos='zoom-in'
      data-aos-offset='300'
      data-aos-delay='1500'

      >
        <img src={head3} alt="" />
      <div className='absolute bottom-0 bg-white/20 backdrop-blur-md m-w-[300px]  min-h-[150px] p-6'>

        
        <h4 className='font-semibold text-xl pb-3' >Multiverse</h4>

        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis inventore perspiciatis animi praesentium est, veritatis quis nulla tempore, aliquid nihil illo placeat harum voluptates id quasi, quidem error autem. Placeat.</p>
        
      </div>
      </div>
      <div 
      data-aos='zoom-in'
      data-aos-offset='300'
      data-aos-delay='1800'

      className='relative'>
        <img src={head4} alt="" />
      <div className='absolute bottom-0 bg-white/20 backdrop-blur-md m-w-[300px]  min-h-[150px] p-6'>

        
        <h4 className='font-semibold text-xl pb-3' >Spectrum</h4>

        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis inventore perspiciatis animi praesentium est, veritatis quis nulla tempore, aliquid nihil illo placeat harum voluptates id quasi, quidem error autem. Placeat.</p>
        
      </div>
      </div>

    </div>
    
    </div>
  </section>;
};

export default Headsets;
