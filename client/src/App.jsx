import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import { RouterProvider } from "react-router-dom"
import router from "./routers"

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY)

function App() {
  return (
    <>
      <Elements stripe={stripePromise}>
        <RouterProvider router={router} />
      </Elements>
    </>
  )
}

export default App
