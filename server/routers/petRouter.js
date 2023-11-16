const PetController = require("../controllers/petController")

const petRouter = require("express").Router()

petRouter.get("/", PetController.pets)
petRouter.get("/petFinder", PetController.petFinder)
petRouter.get("/petFinder/:id", PetController.petFinderById)
petRouter.get("/petLocal/:id", PetController.petLocalById)
petRouter.patch("/petLocal/:id", PetController.adopted)
petRouter.delete("/petLocal/:id", PetController.deletePet)

module.exports = petRouter