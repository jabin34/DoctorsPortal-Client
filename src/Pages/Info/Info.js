import React from 'react';
import {BiTime} from 'react-icons/bi';
import clock from'../../assets/icons/clock.svg';
import marker from'../../assets/icons/marker.svg';
import phone from'../../assets/icons/phone.svg';


const Info = () => {
    return (
   <div className=' grid grid-cols-1 lg:grid-cols-3 gap-5 px-12 '>
  <div class="text-white  bg-gradient-to-r from-secondary to-primary  card lg:card-side bg-base-100 shadow-xl p-2 m-2">
  <figure className='pl-5'><img src={clock}alt="Album"/></figure>
  <div class="card-body">
    <h2 class="card-title">Opening Hours</h2>
    <p>Click the button to listen on Spotiwhy app.</p>
    
  </div>
</div>

<div class="bg-accent text-white card lg:card-side  shadow-xl p-2  m-2">
<figure className='pl-5'><img src={marker}alt="Album"/></figure>
  <div class="card-body">
    <h2 class="card-title">Visit our location</h2>
    <p>Brooklyn, NY 10036, United States.</p>
   
  </div>
</div>
<div class=" text-white  bg-gradient-to-r from-secondary to-primary card lg:card-side bg-base-100 shadow-xl p-2  m-2">
<figure className='pl-5'><img src={phone}alt="Album"/></figure>
  <div class="card-body">
    <h2 class="card-title">Contact us now</h2>
    <p>+000 123 456789</p>
   
  </div>
</div>
    
        </div>
    );
};

export default Info;