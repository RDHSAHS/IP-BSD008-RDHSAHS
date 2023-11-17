const DonateController = require("../controllers/donateController")

const donateRouter = require("express").Router()

donateRouter.post("/", DonateController.handleDonation)

module.exports = donateRouter