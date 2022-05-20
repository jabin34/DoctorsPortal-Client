import React from 'react';
import people1 from'../../assets//images/people1.png';
import people2 from'../../assets//images/people2.png';
import people3 from'../../assets//images/people3.png';
import quote from'../../assets//icons/quote.svg';
const Reviews = () => {
    return (
        <div className='mt-5'>
          <div className='flex justify-between'>
            <div >
            <h2 className='text-1sm text-primary font bold'>Testimonial</h2>
             <h6 className='text-3xl'>What Our Patients Says</h6>
            </div>
            <div>
              <img  className='w-24 lg:w-48' src={quote} alt='pic'/>
            </div>
          </div>
           
             <div className='grid grid-cols-1  lg:grid-cols-3 gap-5 pt-12'>
   
 <div class="card  bg-base-100 shadow-xl">
  <div class="card-body">  
    <p>It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content</p>
    <div class="flex justify-start items-center mt-5">
    <div class="avatar">
  <div class="w-10 h-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
    <img src={people1}alt='pic' />
  </div>
</div>
<div className='p-2 mx-2'>
<h2 className='text-2xl'>Winson Herry</h2>
<p>California</p>
</div>

    </div>
  </div>
</div>
<div class="card  bg-base-100 shadow-xl">
  <div class="card-body">  
    <p>It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content</p>
    <div class="flex justify-start items-center mt-5">
    <div class="avatar">
  <div class="w-10 h-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
    <img src={people2} alt='pic' />
  </div>
</div>
<div className='p-2 mx-2'>
<h2 className='text-2xl'>Winson Herry</h2>
<p>California</p>
</div>

    </div>
  </div>
</div>
<div class="card  bg-base-100 shadow-xl">
  <div class="card-body">  
    <p>It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content</p>
    <div class="flex justify-start items-center mt-5">
    <div class="avatar">
  <div class="w-10 h-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
    <img src={people3} alt='pic' />
  </div>
</div>
<div className='p-2 mx-2'>
<h2 className='text-2xl'>Winson Herry</h2>
<p>California</p>
</div>

    </div>
  </div>
</div>
 </div>
        </div>

    );
};

export default Reviews;