import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import BookingModal from "./BookingModal";
import ServiceCard from "./ServiceCard";

const AvaiableAppointment = ({ date }) => {
  // const [services,setServices] = useState([]);
  const [treatment, setTreatment] = useState(null);
  const formattedDate = format(date, "PP");
  const {
    data: services,
    isLoading,
    refetch,
  } = useQuery(["available", formattedDate], () =>
    fetch(
      `https://rocky-tundra-61365.herokuapp.com/available?date=${formattedDate}`
    ).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading />;
  }
  //     useEffect(()=>{
  // fetch(`https://rocky-tundra-61365.herokuapp.com/available?date=${formattedDate}`)
  // .then(res=>res.json())
  // .then(data=>setServices(data));
  //     },[formattedDate])
  return (
    <div>
      <p className="text-xl text-center text-secondary">
        Available appointment on date:{format(date, "PP")}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-12 ">
        {services?.map((service) => (
          <ServiceCard
            key={service._id}
            service={service}
            setTreatment={setTreatment}
          />
        ))}
      </div>

      {treatment && (
        <BookingModal
          date={date}
          treatment={treatment}
          refetch={refetch}
          setTreatment={setTreatment}
        ></BookingModal>
      )}
    </div>
  );
};

export default AvaiableAppointment;
