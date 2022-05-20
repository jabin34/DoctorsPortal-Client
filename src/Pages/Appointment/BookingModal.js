import { format } from "date-fns";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../firebase.init";

const BookingModal = ({ date, treatment, setTreatment, refetch }) => {
  const [user, loading, error] = useAuthState(auth);
  const { _id, name, slots, price } = treatment;
  console.log(user.users);
  const handleBooking = (event) => {
    event.preventDefault();
    const slot = event.target.slot.value;
    // const name = event.target.name.value;
    //const email = event.target.email.value;
    const formattedDate = format(date, "PP");
    const phone = event.target.phone.value;
    const bookingData = {
      treatmentId: _id,
      treatment: name,
      date: formattedDate,
      slot,
      price,
      paitentName: user.displayName,
      paitent: user.email,
      phone: phone,
    };
    console.log(bookingData);
    fetch("https://rocky-tundra-61365.herokuapp.com/booking", {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bookingData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          toast(`Appointment is set,${formattedDate} at ${slot}`);
        } else {
          toast.error(
            `Already have an  appointment on,${data.booking?.date} at ${data.booking?.slot}`
          );
        }
        refetch();
        setTreatment(null);
        console.log(data);
      });
    event.target.reset();
  };
  return (
    <div>
      <input type="checkbox" id="booking-modal" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <h3 class="font-bold text-lg text-secondary">Booking for : {name}</h3>
          <form
            className="grid grid-cols-1 gap-3 justify-items-center mt-2"
            onSubmit={handleBooking}
          >
            <input
              type="text"
              disabled
              value={format(date, "PP")}
              class="input input-bordered w-full max-w-xs "
            />

            <select name="slot" class="select select-bordered w-full max-w-xs">
              {slots.map((slot, index) => (
                <option key={index} value={slot}>
                  {slot}
                </option>
              ))}
            </select>
            <input
              type="text"
              name="name"
              disabled
              value={user?.displayName || ""}
              class="input input-bordered w-full max-w-xs"
            />
            <input
              type="email"
              name="email"
              disabled
              value={user?.email || ""}
              class="input input-bordered w-full max-w-xs"
            />
            <input
              type="text"
              name="phone"
              placeholder="phone"
              class="input input-bordered w-full max-w-xs"
            />
            <input
              type="submit"
              value="Submit"
              class="btn text-white btn-secondary w-full max-w-xs"
            />
          </form>
          <div class="modal-action">
            <label
              htmlFor="booking-modal"
              class="btn btn-sm btn-circle absolute right-2 top-2"
            >
              ✕
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
