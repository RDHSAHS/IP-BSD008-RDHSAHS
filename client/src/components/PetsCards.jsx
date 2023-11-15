import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

const BASE_URL = "http://localhost:3000/pets"
const PET_API = axios.create({
  baseURL: BASE_URL,
})

const PetCards = () => {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [pets, setPets] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    async function fetchPets() {
      try {
        setLoading(true)
        const { data } = await PET_API.get("/petFinder")
        console.log(data.data.animals[0].photos[0].full, "<<<<<<<<");
        setPets(data.data.animals)
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false)
      }
    }
    fetchPets()
  }, [])

  //handle petOnClick

  if (loading) return <p>LOADING~</p>
  if (error) return <p>Error Fetching Pet Data .... </p>

  return (
    <>
      {pets.map((pet) => (
        <div key={pet.id} className="block rounded-lg bg-white dark:bg-neutral-700 mx-[1rem] my-[1rem]">
          <h1>{pet.name}</h1>
          <div
            className="rounded-lg relative bg-cover bg-no-repeat flex justify-center hover:bg-[rgba(0,225,245,0.33)] transition-all duration-300"
            data-te-ripple-init
            data-te-ripple-color="light"
          >
            <img
              className="rounded-t-lg h-[33rem]"
              src={pet.photos[0]?.full || ''} //here
              alt="PetPhotoHere"
            // onClick={() => {
            //   handleWatchClick(watch.id)
            // }}
            />
          </div>
        </div>
      ))}
    </>
  )
}

export default PetCards