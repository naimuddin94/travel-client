import { FormEvent, useEffect, useState } from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import useAxiosSecure from "../hooks/useAxiosSecure";
import useBookings from "../hooks/useBookings";
import Loading from "../components/utility/Loading";
import { IService } from "../types/Types";

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const axiosSecure = useAxiosSecure();
  const [clientSecret, setClientSecret] = useState("");
  const [transitionId, setTransitionId] = useState("");
  const { services, isLoading } = useBookings();

  if (isLoading) {
    <Loading />;
  }

  const totalPrice = services.reduce(
    (acc: number, curr: IService) => acc + parseFloat(curr.price),
    0
  );

  useEffect(() => {
    axiosSecure
      .post("/create-payment-intent", { price: totalPrice })
      .then((res) => {
        console.log(res.data);
        setClientSecret(res.data.clientSecret);
      });
  }, [axiosSecure, totalPrice]);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card === null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("[error]", error);
    } else {
      console.log("[PaymentMethod]", paymentMethod);
    }

    // confirm payment
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: "username",
            email: "user2@example.com",
          },
        },
      });

    if (confirmError) {
      console.log("confirm-error ", confirmError);
    } else {
      console.log("paymentInt ", paymentIntent);
      setTransitionId(paymentIntent.id);
      if (paymentIntent.status === "succeeded") {
        alert("Payment successfully completed");
      }
    }
  };
  return (
    <div className="pt-16">
      <form
        onSubmit={handleSubmit}
        className="max-w-3xl rounded-lg mx-auto bg-slate-500 p-10"
      >
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="mt-5 btn btn-active btn-primary"
          type="submit"
          disabled={!stripe}
        >
          Pay
        </button>
      </form>
    </div>
  );
};

export default CheckoutForm;
