const { StatusCodes } = require("http-status-codes");
const baseError = require("./base.error");

class NotImplemented extends baseError {
  constructor(methodName) {
    super(
      "Not Implemented",
      StatusCodes.NOT_IMPLEMENTED,
      `${methodName} Not Implemented`,
      {},
    );
  }
}

module.exports = NotImplemented;
