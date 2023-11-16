const { User, Pet } = require("../models");

const authorizationPet = async (req, _, next) => {
  const { petId } = req.params;
  try {
    const { userId, role } = req.loginInfo;

    switch (role) {
      case "Admin": next(); break;
      case "User":
        const pet = await Pet.findByPk(petId);
        if (!pet) throw new Error("NotFound");
        if (!userId !== pet.userId) throw new Error("NotFound");
        next();
        break;
      default: throw new Error("Forbidden")
    }

  } catch (err) {
    next(err);
  }
};

const authorizationUser = async (req, _, next) => {
  try {
    const { userId, role } = req.loginInfo;
    const user = await User.findByPk(userId);
    if (!user) throw new Error("NotFound");
    if (role === "Admin") {
      next();
    } else {
      throw new Error("Forbidden");
    }
  } catch (err) {
    next(err)
  }
}

module.exports = { authorizationPet, authorizationUser };
