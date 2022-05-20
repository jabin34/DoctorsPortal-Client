import React from 'react';
import appointment from '../../assets/images/appointment.png';
import PrimaryButton from '../PrimaryButton/PrimaryButton';
const Contact = () => {
    return (
 <div className='p-5 mt-5' style={{ background:`url(${ appointment})`}}>
    <div class="hero min-h-screen ">
  <div class="hero-content flex-col ">
    <div class="text-center text-white">
      <h1 class="text-1xl font-bold text-primary">Contact us</h1>
      <p class="py-6 text-5xl">Stay connected with us</p>
    </div>
    <div class="card flex-shrink-0 w-full max-w-sm ">
      <div class="card-body">
        <div class="form-control">
          
          <input type="text" placeholder="email" class="input input-bordered" />
        </div>
        <div class="form-control">
          <input type="text" placeholder="Subject" class="input input-bordered" />
          
        </div>
        <div class="form-control">
         
          <textarea class="textarea textarea-bordered h-24" placeholder="your message"></textarea>
        </div>
        <div class="mt-6 flex justify-center">
         <PrimaryButton>Submit</PrimaryButton>
        </div>
      </div>
    </div>
  </div>
</div>
 </div>
    );
};

export default Contact;