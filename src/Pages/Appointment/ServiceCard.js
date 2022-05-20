import React from "react";

const ServiceCard = ({ service,setTreatment }) => {
    const {name,slots,price} = service;
  return (

      <div className="card  lg:mx-w-lg bg-base-100 shadow-xl">
        <div className="card-body ">
          <h2 className="text-xl text-secondary text-center">{name}</h2>
          <p className="text-center text-bold"><small>${price}</small></p>
          <p className="text-center">{slots.length
          ?<span>{slots[0]}</span>
          :<span className="text-red-500">Try another day</span>
        }</p>
          <p className="text-center">{slots.length} {slots.length>1?'spaces':'space'}  available</p>
          <div className="card-actions justify-center">
          <label htmlFor="booking-modal"
           disabled={slots.length===0}
           className="btn btn-secondary text-white uppercase"
           onClick={()=>{setTreatment(service)}}>
              Book Appointment</label>
        
          </div>
        </div>
      </div>
  
  );
};

export default ServiceCard;
