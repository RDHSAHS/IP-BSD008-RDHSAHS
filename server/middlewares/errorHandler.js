const errorHandler = (err, req, res, next) => {
  let code = 500;
  let message = "Internal Server Error";

  if (err.name === `SequelizeValidationError`) {
    code = 400;
    message = err.errors[0].message;
  }
  if (err.name === `SequelizeUniqueConstraintError`) {
    code = 400;
    message = err.errors[0].message;
  }
  if (err.name === `SequelizeDatabaseError`) {
    code = 400;
    message = `Invalid Data Type`;
  }
  if (err.name === `SequelizeForeignKeyConstraintError`) {
    code = 400;
    message = `Foreign Key Constraint Error`;
  }

  if (err.message === "Email is required" || err.message === "Password is required" || err.message === `Username is required`) {
    code = 400;
    message = err.message
  }
  if (err.message === `LoginError`) {
    code = 400;
    message = `Invalid Email/Password`;
  }
  if (err.message === `RegisterError`) {
    code = 400;
    message = `Failed to Create New User`;
  }
  if (err.message === `PasswordError`) {
    code = 400;
    message = `Wrong/different password`;
  }
  // if (err.message === `AddSpeciesError`) {
  //   code = 400;
  //   message = `Failed to Create New Species`;
  // }
  // if (err.message === `AddPetError`) {
  //   code = 400;
  //   message = `Failed to Create New Pet`;
  // }

  if (err.name === "JsonWebTokenError") {
    code = 401;
    message = "Invalid token";
  }
  if (err.message === "Unauthorized") {
    code = 401;
    message = "Please login first";
  }
  if (err.message === "Forbidden") {
    code = 403;
    message = "You have no access";
  }
  if (err.message === "NotFound") {
    code = 404;
    message = "Data Not Found";
  }

  res.status(code).json({ code, message });
};

module.exports = errorHandler;
