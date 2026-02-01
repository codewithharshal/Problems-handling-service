const { StatusCodes } = require("http-status-codes");
const baseError = require("./base.error");

class InternalServer extends baseError {
  constructor(details) {
    super(
      "Internal Server Error",
      StatusCodes.INTERNAL_SERVER_ERROR,
      "Something went wrong",
      details,
    );
  }
}

module.exports = InternalServer;
