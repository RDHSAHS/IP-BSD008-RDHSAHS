const router = require("express").Router()
const donateRouter = require("./donateRouter")
const petRouter = require("./petRouter")
const userRouter = require("./userRouter")

router.use("/user", userRouter)
router.use("/pets", petRouter)
router.use("/donate", donateRouter)

module.exports = router