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
  const [pet, setPet] = useState({})
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
      navigate("/")
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <>
      <div className="grid grid-cols-2 gap-4 items-center">
        <div>
          <img
            className="flex items-center justify-center"
            src={localPet.imageUrl || 'https://png.pngtree.com/png-vector/20230726/ourmid/pngtree-vector-dog-paw-icon-paw-print-paw-with-water-and-clouds-png-image_6746192.png'}
          />
        </div>
        <div>
          <h1>Name: {localPet.name}</h1>
          <h1>About: {localPet.about}</h1>
          <h1>Breed: {localPet.breed}</h1>
          <h1>Color: {localPet.color || '-'} </h1>
          <h1>Gender: {localPet.gender}</h1>
          <h1>Status: {localPet.status}</h1>
          {localPet.status === "adoptable" && (
            <button className="bg-blue" onClick={adoptHandler}>Adopt</button>
          )}
        </div>
      </div>
    </>
  )
}

export default PetDetails