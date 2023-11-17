import React, { useState } from "react"
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js"
import axios from "axios"

const BASE_URL = "http://localhost:3000"
const STRIPE_API = axios.create({
  baseURL: BASE_URL,
})

function DonateForm() {
  const stripe = useStripe()
  const elements = useElements()
  const [amount, setAmount] = useState(1000)

  const handleSubmit = async (event) => {
    event.preventDefault()

    const { token, error } = await stripe.createToken(elements.getElement(CardElement))

    if (!error) {
      try {
        const response = await STRIPE_API.post("/donate", {
          token: token.id,
          amount: amount,
          description: 'Donation to Hooman',
        });

        console.log(response);
      } catch (error) {
        console.error('Error making donation:', error.response);
      }
    } else {
      console.error('Error creating token:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center space-x-4">
      <label className="flex items-center">
        <span className="mr-2 text-black ">$</span>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="border border-gray-300 p-2 w-24 text-center"
        />
      </label>
      <CardElement className="border border-gray-300 p-2 w-64" />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
      >
        Donate
      </button>
    </form>
  );
}

export default DonateForm;
