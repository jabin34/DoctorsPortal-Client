import React from 'react';
import treatment from'../../assets//images/treatment.png';
const YourTerms = () => {
    return (
<div class="card lg:card-side bg-base-100 p-12 mt-12 lg:mb-32">
  <figure className='pl-12'><img src={treatment} alt="Album"/></figure>
  <div class="card-body">
    <h2 class="card-title  text-4xl ">Exceptional Dental Care, on Your Terms</h2>
    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page.</p>
    <div class="justify-start">
      <button class="btn btn-primary text-white uppercase font-bold bg-gradient-to-r from-secondary to-primary">GET STARTED</button>
    </div>
  </div>
</div>
    );
};

export default YourTerms;