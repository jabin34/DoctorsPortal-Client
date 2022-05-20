import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../Shared/Loading";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm ";

const stripePromise = loadStripe(
  "pk_test_51L1A8tGfA59tBHHEj9LE0MUevXZgBJ16CVheHhYHMQ16gcMATD7YIFKvGuTTruostHp2emJP8hOBkN2qE6GJhAQc0061pusAy1"
);

const Payment = () => {
  const { id } = useParams();
  const url = `https://rocky-tundra-61365.herokuapp.com/booking/${id}`;
  const { data: appointment, isLoading } = useQuery(["booking", id], () =>
    fetch(url, {
      method: "get",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div>
      <div class="card  w-50  max-w-md  bg-base-100 shadow-xl my-12">
        <div class="card-body  ">
          <p className="text-success">Hello!, {appointment.paitent}</p>
          <h2 class="card-title">Pay for {appointment.treatment}</h2>
          <p>
            Your appointment:{" "}
            <span className="text-orange-700">{appointment?.date} </span> at{" "}
            {appointment.slot}
          </p>
          <p>Please pay: ${appointment.price}</p>
        </div>
      </div>
      <div class="card  w-50  max-w-md shadow-2xl bg-base-100">
        <div class="card-body">
          <Elements stripe={stripePromise}>
            <CheckoutForm appointment={appointment} />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default Payment;
