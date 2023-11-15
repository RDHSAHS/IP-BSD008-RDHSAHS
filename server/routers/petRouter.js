const PetController = require("../controllers/petController")

const petRouter = require("express").Router()

petRouter.get("/", PetController.pets)
petRouter.get("/petFinder", PetController.petFinder)

module.exports = petRouter