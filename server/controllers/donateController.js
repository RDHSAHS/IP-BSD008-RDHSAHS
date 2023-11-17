
class DonateController {
  static async handleDonation(req, res, next) {
    const { stripe } = require("../app")
    try {
      const { token, amount, description } = req.body

      const charge = await stripe.charges.create({
        amount,
        currency: "usd",
        source: token,
        description,
      });

      res.json({ success: true, charge })
    } catch (err) {
      console.error(err);
      next(err)
    }
  }
}

module.exports = DonateController
