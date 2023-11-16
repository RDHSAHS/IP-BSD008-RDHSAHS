const { Pet, Species, User } = require("../models")
const axios = require("axios")

const fetchTokenPetFinder = async () => {
  try {
    const { data } = await axios.post("https://api.petfinder.com/v2/oauth2/token", {
      grant_type: "client_credentials",
      client_id: "xlio6MMqau3yeapytp6v9ZATSiBTfwRKgbm9kHzRuc8YFRW483",
      client_secret: "742uxWqGiDCsAhGRUB8IpOIEbR3ZkgW9iUojCRGj",
    })
    return data.access_token
  } catch (err) {
    console.error(err);
  }
}

class PetController {
  static async pets(req, res, next) {
    try {
      const pets = await Pet.findAll({
        include: [
          { model: Species },
          {
            model: User,
            exclude: ["password", "role"]
          }
        ],
        order: [["id", "ASC"]]
      })
      res.status(200).json({
        status: 200,
        data: pets,
      })
    } catch (err) {
      console.error(err);
      next(err)
    }
  }

  static async petFinder(req, res, next) {
    let petFinderToken = null
    try {
      if (!petFinderToken) {
        petFinderToken = await fetchTokenPetFinder()
      }

      const { data } = await axios.get("https://api.petfinder.com/v2/animals", {
        headers: {
          Authorization: `Bearer ${petFinderToken}`
        }
      })
      res.status(200).json({
        status: 200,
        data: data
      })
    } catch (err) {
      console.error(err);
      next(err)
    }
  }

  static async petFinderById(req, res, next) {
    let petFinderToken = null
    const { id } = req.params
    try {
      if (!petFinderToken) {
        petFinderToken = await fetchTokenPetFinder()
      }

      const { data } = await axios.get(`https://api.petfinder.com/v2/animals/${id}`, {
        headers: {
          Authorization: `Bearer ${petFinderToken}`
        }
      })
      res.status(200).json({
        status: 200,
        data: data
      })
    } catch (err) {
      console.error(err);
      next(err)
    }
  }

  static async petLocalById(req, res, next) {
    const { id } = req.params
    try {
      let petFound = await Pet.findByPk(id)
      if (!petFound) throw new Error("PetNotFound")
      res.status(200).json({
        status: 200,
        data: petFound
      })
    } catch (err) {
      console.error(err);
      next(err)
    }
  }

  static async adopted(req, res, next) {
    const { id } = req.params
    try {
      let petFound = await Pet.findByPk(id)
      if (!petFound) throw new Error("PetNotFound")

      await Pet.update({ status: "adopted" }, { where: { id } })

      res.status(200).json({
        message: `Pet adopted`,
        data: petFound
      })
    } catch (err) {
      console.error(err);
      next(err)
    }
  }
  static async deletePet(req, res, next) {
    const { id } = req.params
    try {
      let petFound = await Pet.findByPk(id)
      if (!petFound) throw new Error("PetNotFound")

      await Pet.destroy({ where: { id } })

      res.status(200).json({
        message: `Pet removed from database`,
        data: petFound
      })
    } catch (err) {
      console.error(err);
      next(err)
    }
  }
}

module.exports = PetController