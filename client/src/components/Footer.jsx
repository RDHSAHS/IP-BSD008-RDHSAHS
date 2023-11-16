import React from "react"
import DonateForm from "./DonateForm"

const Footer = () => {
  return (
    <div className="bg-[#82c9cd] text-white pt-3 pb-7">
      <p className="text-center text-lg m-3">Help us making them happy :)</p>
      <div className="max-w-2xl mx-auto flex flex-col items-center space-y-4">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <DonateForm />
        </div>
      </div>
    </div>
  )
}

export default Footer
