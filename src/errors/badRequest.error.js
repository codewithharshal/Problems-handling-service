const { StatusCodes } = require("http-status-codes");
const baseError = require("./base.error");

class BadRequest extends baseError {
  constructor(propertyName, details) {
    super(
      "Bad Request Error",
      StatusCodes.BAD_REQUEST,
      `Invalid Structure for ${propertyName}`,
      details,
    );
  }
}

module.exports = BadRequest;
