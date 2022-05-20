import React from 'react';
import doctor from '../../assets/images/doctor.png';
import appointment from '../../assets/images/appointment.png';
import PrimaryButton from '../PrimaryButton/PrimaryButton';
const MakeAppointment = () => {
    return (
        <section className='flex justify-center items-center' style={{
            background:`url(${appointment })`
        }}>
           <div className='flex-1 hidden lg:block'>
            <img  className='mt-[-200px] pt-12' src={doctor} alt="doctor"/>
           </div>
           <div className='flex-1 p-12 m-2'>
           <h3 className='text-xl text-primary font-bold'>Appointment</h3>
           <h3 className='text-3xl text-white '>Make an Appointment Today</h3>
           <p className='text-white mb-12'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis distinctio facere velit hic dolores tempore culpa ut sunt qui, laudantium soluta eum, illo repellendus voluptate assumenda, error nam reprehenderit? Inventore.</p>
           <PrimaryButton >Get Started</PrimaryButton>
           </div>
        </section>
    );
};

export default MakeAppointment;