import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import CatImage from "./CatImage"

const BASE_URL = "http://localhost:3000/pets"
const PET_API = axios.create({
  baseURL: BASE_URL,
})

const PetCards = () => {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [pets, setPets] = useState([])
  const [localPets, setLocalPets] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    async function fetchPets() {
      try {
        setLoading(true)
        const { data } = await PET_API.get("/petFinder")
        const { data: dataL } = await PET_API.get("/")
        setLocalPets(dataL.data)
        setPets(data.data.animals)
      } catch (err) {
        console.error(err);
        setError(err)
      } finally {
        setLoading(false)
      }
    }
    fetchPets()
  }, [])

  const onClickHandler = (id) => {
    navigate(`/petDetails/${id}`)
  }

  if (loading) return <CatImage />
  if (error) return <p>Error Fetching Pet Data .... </p>

  return (
    <div className="min-h-screen bg-white py-6 flex flex-col justify-center sm:py-12">
      <div className="relative w-full max-w-6xl mx-auto px-4">
        <div id="card-box" className="mx-[2rem] my-[3rem] grid grid-cols-5 gap-3">
          {localPets.map((pet) => (
            <div key={pet.id} className="block rounded-full bg-white dark:bg-gray-700">
              <div
                className="rounded relative bg-cover bg-no-repeat flex justify-center transition-all duration-300"
                data-te-ripple-init
                data-te-ripple-color="light"
              >
                <img
                  className="rounded h-[28rem] w-[33rem] object-cover hover:bg-[rgba(0,225,245,0.33)]"
                  src={pet.imageUrl || 'https://png.pngtree.com/png-vector/20230726/ourmid/pngtree-vector-dog-paw-icon-paw-print-paw-with-water-and-clouds-png-image_6746192.png'}
                  alt={`${pet.name}'s photo`}
                  onClick={() => {
                    onClickHandler(pet.id);
                  }}
                />
              </div>
            </div>
          ))}
          {pets.map((pet) => (
            <div key={pet.id} className="block rounded-full bg-white dark:bg-gray-700">
              <div
                className="rounded relative bg-cover bg-no-repeat flex justify-center transition-all duration-300"
                data-te-ripple-init
                data-te-ripple-color="light"
              >
                <img
                  className="rounded h-[28rem] w-[33rem] object-cover hover:bg-[rgba(0,225,245,0.33)]"
                  src={pet.photos[0]?.full || 'https://png.pngtree.com/png-vector/20230726/ourmid/pngtree-vector-dog-paw-icon-paw-print-paw-with-water-and-clouds-png-image_6746192.png'}
                  alt={`${pet.name}'s photo`}
                  onClick={() => {
                    onClickHandler(pet.id);
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default PetCards