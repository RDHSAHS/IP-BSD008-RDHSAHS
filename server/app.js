if (!process.env.NODE_ENV !== "production") require("dotenv").config()

const cors = require("cors")
const express = require("express")
const DATABASE_URL = process.env.DATABASE_URL
const port = process.env.PORT || 3000

const app = express()

app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.listen(port, () => console.log(`Run on ${port}`))

module.exports = { app, DATABASE_URL }