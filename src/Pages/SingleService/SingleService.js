import React from 'react';

const SingleService = ({img,txt}) => {
    return (
        <div class="card  bg-base-100 shadow-xl">
        <figure class="px-10 pt-10">
          <img src={img} alt="Shoes" class="rounded-xl" />
        </figure>
        <div class="card-body items-center text-center">
          <h2 class="card-title">{txt}</h2>
          <p>Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the</p>
          
          
        </div>
      </div>
    );
};

export default SingleService;