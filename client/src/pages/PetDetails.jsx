import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import CatImage from "../components/CatImage"

const BASE_URL = "http://localhost:3000/pets"
const PET_API = axios.create({
  baseURL: BASE_URL,
})

const PetDetails = () => {
  const { id } = useParams()
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  // const [pet, setPet] = useState({})
  const [localPet, setLocalPet] = useState({})
  const [adopted, setAdopted] = useState("adoptable")
  const navigate = useNavigate()

  useEffect(() => {
    async function fetchPet() {
      try {
        setLoading(true)
        // const { data } = await PET_API.get(`/petFinder/${id}`)
        const { data: dataL } = await PET_API.get(`/petLocal/${id}`)
        setLocalPet(dataL.data)
        // setPet(data.data.animal)

      } catch (err) {
        console.error(err);
        setError(err)
      } finally {
        setLoading(false)
      }
    }
    fetchPet()
  }, [id])

  if (loading) return <CatImage />
  if (error) return <p>Error Fetching Pet Data .... </p>

  const adoptHandler = async () => {
    try {
      await PET_API.patch(`/petLocal/${id}`, { adopted: true })
      setAdopted("adopted")
      await PET_API.delete(`/petLocal/${id}`)
      navigate("/")
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <>
      <div className="min-h-screen bg-gradient-to-r from-green-100 to-green-300 py-6 flex flex-col justify-center sm:py-12">
        <div className="relative w-full max-w-6xl mx-auto px-4">
          <div className="shadow-lg sm:rounded-3xl bg-white p-10 sm:p-20 shadow-xl shadow-[#374f2f]">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
              <div className="flex items-center justify-center">
                <img
                  className="object-cover object-center w-full h-full max-h-96"
                  src={localPet.imageUrl || 'https://png.pngtree.com/png-vector/20230726/ourmid/pngtree-vector-dog-paw-icon-paw-print-paw-with-water-and-clouds-png-image_6746192.png'}
                  alt="Pet"
                />
              </div>
              <div className="text-black">
                <h1 className="text-3xl font-bold mb-4">Name: {localPet.name}</h1>
                <p className="mb-2">About: {localPet.about}</p>
                <p className="mb-2">Breed: {localPet.breed}</p>
                <p className="mb-2">Color: {localPet.color || '-'}</p>
                <p className="mb-2">Gender: {localPet.gender}</p>
                <p className="mb-2">Status: {localPet.status}</p>
                {localPet.status === "adoptable" && (
                  <button
                    className="bg-blue text-white px-4 py-2 rounded-md"
                    onClick={adoptHandler}
                  >
                    Adopt
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PetDetails