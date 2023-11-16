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
    <div className="min-h-screen bg-[#82c9cd] py-6 flex flex-col justify-center sm:py-12">
      <div className="relative w-full max-w-6xl mx-auto px-4">
        <div className="shadow-lg sm:rounded-3xl bg-white p-10 sm:p-20 shadow-xl shadow-[#374f2f]">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
            <div className="flex items-center justify-center">
              <img
                className="object-cover object-center w-full h-full max-h-96 rounded-lg"
                src={localPet.imageUrl || 'https://png.pngtree.com/png-vector/20230726/ourmid/pngtree-vector-dog-paw-icon-paw-print-paw-with-water-and-clouds-png-image_6746192.png'}
                alt="Pet"
              />
            </div>
            <div className="text-black text-center">
              <h1 className="text-4xl font-bold mb-4">Meet {localPet.name}</h1>
              <p className="mb-4 text-lg">{localPet.about}</p>
              <div className="mb-4">
                <p className="text-lg font-bold">Breed:</p>
                <p>{localPet.breed}</p>
              </div>
              <div className="mb-4">
                <p className="text-lg font-bold">Color:</p>
                <p>{localPet.color || '-'}</p>
              </div>
              <div className="mb-4">
                <p className="text-lg font-bold">Gender:</p>
                <p>{localPet.gender}</p>
              </div>
              <div className="mb-4">
                <p className="text-lg font-bold">Status:</p>
                <p>{localPet.status}</p>
              </div>
              {localPet.status === "adoptable" && (
                <button
                  className="bg-[#82c9cd] text-white px-6 py-3 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
                  onClick={adoptHandler}
                >
                  Adopt {localPet.name}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PetDetails