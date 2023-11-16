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
    <form onSubmit={handleSubmit}>
      <label>
        Amount:
        <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
      </label>
      <CardElement />
      <button type="submit">Donate</button>
    </form>
  );
}

export default DonateForm;
