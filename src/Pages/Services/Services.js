import React from 'react';
import SingleService from '../SingleService/SingleService';
import flurid from'../../assets//images/fluoride.png';
import cavity from'../../assets//images/cavity.png';
import white from'../../assets//images/whitening.png';


const Services = () => {
    return (
        <div className='my-28'>
            <h6 className='text-secondary text-center pt-12  font-bold '>OUR SERVICES</h6>
            <h2  className='text-accent text-center text-4xl pb-12'>Services We Provide</h2>
            <div className='grid grid-cols-1  lg:grid-cols-3 gap-5 px-12 mt-12'>
            <SingleService img={flurid} txt={'Fluoride Treatment'}/>
            <SingleService img={cavity} txt={'Cavity Filling'}/>
            <SingleService img={white} txt={'Teeth Whitening'}/>
        </div>
        </div>
       
    );
};

export default Services;