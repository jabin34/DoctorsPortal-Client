import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";

const MyAppointment = () => {
  const [user] = useAuthState(auth);
  console.log(user);
  const [appointment, setAppointment] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    if (user) {
      fetch(
        `https://rocky-tundra-61365.herokuapp.com/booking?paitent=${user.email}`,
        {
          method: "get",
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      )
        .then((res) => {
          if (res.status === 401 || res.status === 403) {
            navigate("/");
            signOut(auth);
            localStorage.removeItem("accessToken");
          } else if (res.status === 403) {
          }
          return res.json();
        })
        .then((data) => {
          console.log(data);
          setAppointment(data);
        });
    }
  }, [user]);

  return (
    <div>
      {/* <h2>{appointment.length}</h2> */}
      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Date</th>
              <th>Time</th>
              <th>Treatment</th>
              <th>Payment</th>
            </tr>
          </thead>
          <tbody>
            {appointment.map((data, index) => (
              <tr>
                <th>{index + 1}</th>
                <th>{data.paitentName}</th>
                <td>{data.date}</td>
                <td>{data.slot}</td>
                <td>{data.treatment}</td>
                <td>
                  {data.price && !data.paid && (
                    <Link to={`/dashboard/payment/${data._id}`}>
                      <button className="btn btn-xs btn-success text-white">
                        Pay
                      </button>
                    </Link>
                  )}
                  {data.price && data.paid && (
                    <div>
                      <p>
                        {" "}
                        <span className="text-success">Paid</span>
                      </p>
                      <p>
                        Transaction Id:{" "}
                        <span className="text-success">
                          {data.transactionId}
                        </span>
                      </p>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyAppointment;
