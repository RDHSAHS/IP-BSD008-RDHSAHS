const { verifyToken } = require("../helpers/jwt");
const { User } = require("../models");

const authentication = async (req, _, next) => {
  try {
    const { authorization } = req.headers;
    if (!authorization) throw new Error("Unauthorized");

    const accessToken = authorization.split(" ")[1];

    const verified = verifyToken(accessToken);

    const user = await User.findByPk(verified.id);
    if (!user) throw new Error("NotFound");

    const { id, username, role } = user;
    req.loginInfo = { userId: id, username, role };
    next();
  } catch (err) {
    next(err)
  }
};

module.exports = authentication;
