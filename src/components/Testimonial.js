import React from 'react';
 import TestimonialSlider from './TestimonialSlider'
const Testimonial = () => {
  return <section className='mb-64 lg:mb-48'>
<div className="container mx-auto">
<div className='bg-purple-400/10 max-h-[400px] p-12 rounded-lg'>
  <div className='text-center'>
    <h2
    
    data-aos='fade-up'
      data-aos-offset='300'
      data-aos-delay='1600'

    className='text-4xl font-semibold mb-6'> Clients Reviews Are Great</h2>
    <p 
    
    data-aos='zoom-in'
      data-aos-offset='300'
      data-aos-delay='1800'

    className='mb-6 mx-auto'> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis maiores velit iure voluptatibus provident cum eius, dignissimos deserunt obcaecati mollitia doloremque aliquam natus delectus cumque, alias beatae accusantium, consequuntur nostrum</p>

  </div>
  <div 
  data-aos='zoom-in'
  data-aos-offset='300'
  data-aos-delay='2000'

  className='bg-pink'>
    <TestimonialSlider/>
  </div>
</div>
</div>

  </section>;
};

export default Testimonial;
