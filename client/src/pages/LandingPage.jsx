import DonateForm from "../components/DonateForm"
import PetCards from "../components/PetsCards"

const LandingPage = () => {
  return (
    <div className="bg-[#82c9cd] h-full">
      <PetCards />
      <DonateForm />
    </div>
  )
}

export default LandingPage