import React, { useState } from 'react';

import AppointmentBanner from './AppointmentBanner';
import AvaiableAppointment from './AvaiableAppointment';

const Appointment = () => {
    const [date,setDate] = useState(new Date());
    return (
        <div>
           <AppointmentBanner date={date}  setDate = {setDate}/>
           <AvaiableAppointment date={date}/>
        </div>
    );
};

export default Appointment;