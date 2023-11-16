const request = require("supertest")
const { sequelize } = require("../models")
const { signToken } = require("../helpers/jwt")
const { hash } = require("../helpers/bcryptjs")

const { app } = require("../app")
const { queryInterface } = sequelize

let access_token

beforeAll(async () => {
  const data = require("../data/pets.json")
  data.forEach(pet => {
    pet.createdAt = pet.updatedAt = new Date()
  })
  await queryInterface.bulkInsert("Pets", data, {})
  //if token needed
  // const payload = {
  //   id: 1,
  //   email: "admin@mail.com",
  //   role: "Admin",
  // }
  // access_token = signToken(payload)
})
afterAll(async () => {
  await queryInterface.bulkDelete("Users", null, {
    restartIdentity: true,
    cascade: true,
    truncate: true,
  })
})

//GETPETS
describe("GET /pets - succeed", () => {
  it("pet data", async () => {
    const body = {
      name: "Oscar",
      about: "A tuxedo cat",
      breed: "Domestic",
      color: "Black and White",
      gender: "Male",
      age: "Adult",
      adoptionFee: 100000,
      imageUrl: "https://rawznaturalpetfood.com/wp-content/uploads/tuxedo-cats.jpg",
      SpeciesId: "1",
      UserId: "1"
    }
    const response = await request(app).get("/pets").send(body)

    expect(response.status).toBe(200)
    // expect(response.body).toHaveProperty("access_token", expect.any(String))
  })
})