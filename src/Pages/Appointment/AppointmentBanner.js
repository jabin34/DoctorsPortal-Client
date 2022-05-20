
import chair from'../../assets/images/chair.png';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { format } from 'date-fns';

const AppointmentBanner = ({date,setDate}) => {
   
    return (
        <div>
            <div className="hero min-h-screen ">
  <div className="hero-content flex-col lg:flex-row-reverse justify-between ">
    <img src={chair} className="max-w-sm rounded-lg shadow-2xl" alt='pic'/>
    <div className='m-5'>
    <div className="card bg-base-100 shadow-xl">
  <div className="card-body">
    <div className="card-actions ">
    <DayPicker 
    mode='single'
    selected={date}
    onSelect ={setDate}
     />
     
    </div>
    {/* <p className='px-3'>you have selected :{format(date,'PP')}</p> */}
  </div>
</div>
   
    </div>
  </div>
</div>

        </div>
    );
};

export default AppointmentBanner;