const request = require("supertest")
const { sequelize } = require("../models")
const { signToken } = require("../helpers/jwt")
const { hash } = require("../helpers/bcryptjs")

const { app } = require("../app")
const { queryInterface } = sequelize

let access_token

beforeAll(async () => {
  const data = require("../data/users.json")
  data.forEach(user => {
    user.password = hash(user.password)
    user.createdAt = user.updatedAt = new Date()
  })
  await queryInterface.bulkInsert("Users", data, {})

  const payload = {
    id: 1,
    email: "admin@mail.com",
    role: "Admin",
  }
  access_token = signToken(payload)
})
afterAll(async () => {
  await queryInterface.bulkDelete("Users", null, {
    restartIdentity: true,
    cascade: true,
    truncate: true,
  })
})

//LOGIN
describe("POST /user/login - succeed", () => {
  it("access token", async () => {
    const body = {
      email: "admin@mail.com",
      password: "password"
    }
    const response = await request(app).post("/user/login").send(body)

    expect(response.status).toBe(200)
    expect(response.body).toHaveProperty("access_token", expect.any(String))
  })
})
describe("POST /user/login - failed", () => {
  it("email null", async () => {
    const body = {
      email: null,
      password: "password"
    }
    const response = await request(app).post("/user/login").send(body)

    expect(response.status).toBe(400)
    expect(response.body).toEqual({
      code: 400,
      message: "Email is required",
    })
  })
})
describe("POST /user/login - failed", () => {
  it("password null", async () => {
    const body = {
      email: "admin@mail.com",
      password: null
    }
    const response = await request(app).post("/user/login").send(body)

    expect(response.status).toBe(400)
    expect(response.body).toEqual({
      code: 400,
      message: "Password is required",
    })
  })
})
describe("POST /user/login - failed", () => {
  it("email not found", async () => {
    const body = {
      email: "admi@mail.com",
      password: "password"
    }
    const response = await request(app).post("/user/login").send(body)

    expect(response.status).toBe(400)
    expect(response.body).toEqual({
      code: 400,
      message: "Invalid Email/Password",
    })
  })
})
describe("POST /user/login - login error", () => {
  it("wrong password", async () => {
    const body = {
      email: "admin@mail.com",
      password: "passsword"
    }
    const response = await request(app).post("/user/login").send(body)

    expect(response.status).toBe(400)
    expect(response.body).toEqual({
      code: 400,
      message: "Wrong/different password",
    })
  })
})

//REGISTER
describe("POST /user/register - succeed", () => {
  it("add user", async () => {
    const body = {
      username: "Test",
      email: "test@mail.com",
      password: "test123",
      role: "User",
    }
    const response = await request(app)
      .post("/user/register")
      .send(body)
      .set("authorization", `Bearer ${access_token}`)

    expect(response.status).toBe(201)
    expect(response.body).toMatchObject(expect.any(Object));
  })
})
describe("POST /user/register - failed", () => {
  it("username null", async () => {
    const body = {
      username: null,
      email: "test@mail.com",
      password: "test123",
      role: "User",
    }
    const response = await request(app)
      .post("/user/register")
      .send(body)
      .set("authorization", `Bearer ${access_token}`)

    expect(response.status).toBe(400)
    expect(response.body).toMatchObject(expect.any(Object));
  })
})
describe("POST /user/register - failed", () => {
  it("email null", async () => {
    const body = {
      username: "Test",
      email: null,
      password: "test123",
      role: "User",
    }
    const response = await request(app)
      .post("/user/register")
      .send(body)
      .set("authorization", `Bearer ${access_token}`)

    expect(response.status).toBe(400)
    expect(response.body).toMatchObject(expect.any(Object));
  })
})
describe("POST /user/register - failed", () => {
  it("password null", async () => {
    const body = {
      username: "Test",
      email: "test@mail.com",
      password: null,
      role: "User",
    }
    const response = await request(app)
      .post("/user/register")
      .send(body)
      .set("authorization", `Bearer ${access_token}`)

    expect(response.status).toBe(400)
    expect(response.body).toMatchObject(expect.any(Object));
  })
})
describe("POST /user/register - failed", () => {
  it("username empty", async () => {
    const body = {
      username: "",
      email: "test@mail.com",
      password: "test123",
      role: "User",
    }
    const response = await request(app)
      .post("/user/register")
      .send(body)
      .set("authorization", `Bearer ${access_token}`)

    expect(response.status).toBe(400)
    expect(response.body).toMatchObject(expect.any(Object));
  })
})
describe("POST /user/register - failed", () => {
  it("email empty", async () => {
    const body = {
      username: "Test",
      email: "",
      password: "test123",
      role: "User",
    }
    const response = await request(app)
      .post("/user/register")
      .send(body)
      .set("authorization", `Bearer ${access_token}`)

    expect(response.status).toBe(400)
    expect(response.body).toMatchObject(expect.any(Object));
  })
})
describe("POST /user/register - failed", () => {
  it("password empty", async () => {
    const body = {
      username: "Test",
      email: "test@mail.com",
      password: "",
      role: "User",
    }
    const response = await request(app)
      .post("/user/register")
      .send(body)
      .set("authorization", `Bearer ${access_token}`)

    expect(response.status).toBe(400)
    expect(response.body).toMatchObject(expect.any(Object));
  })
})
describe("POST /user/register - failed", () => {
  it("email double", async () => {
    const body = {
      username: "Tet",
      email: "test@mail.com",
      password: "tet123",
      role: "Staff",
    }
    const response = await request(app)
      .post("/user/register")
      .send(body)
      .set("authorization", `Bearer ${access_token}`)

    expect(response.status).toBe(400)
    expect(response.body).toMatchObject(expect.any(Object));
  })
})
describe("POST /user/register - failed", () => {
  it("wrong email format", async () => {
    const body = {
      username: "Tet",
      email: "testmailcom",
      password: "tet123",
      role: "Staff",
    }
    const response = await request(app)
      .post("/user/register")
      .send(body)
      .set("authorization", `Bearer ${access_token}`)

    expect(response.status).toBe(400)
    expect(response.body).toMatchObject(expect.any(Object));
  })
})
describe("POST /user/register - failed", () => {
  it("wrong token", async () => {
    const body = {
      username: "Tet",
      email: "testmailcom",
      password: "tet123",
      role: "Staff",
    }
    const response = await request(app)
      .post("/user/register")
      .send(body)
      .set("authorization", `Bearer a${access_token}n`)

    expect(response.status).toBe(400)
    expect(response.body).toMatchObject(expect.any(Object));
  })
})