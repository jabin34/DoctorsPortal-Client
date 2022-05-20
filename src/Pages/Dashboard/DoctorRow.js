import Src from 'daisyui';
import React from 'react';
import { toast } from 'react-toastify';

const DoctorRow = ({doctor,index,refetch,setDeleteDoctor}) => {
    const {speciality,name ,email, img} = doctor;
    
    return (
        <tr>
        <th>{index+1}</th>
        <td>
            <div class="avatar">
              <div class="w-20 rounded">
               <img src={img} alt="Tailwind-CSS-Avatar-component" />
              </div>
        </div>
      </td>
        <td>{name}</td>
        <td>{speciality}</td>
        <td>
        <label onClick={()=>setDeleteDoctor(doctor)} for="delete-modal" className="btn btn-xs btn-error text-white">Delete</label>
        
            </td>
      </tr>
    );
};

export default DoctorRow;