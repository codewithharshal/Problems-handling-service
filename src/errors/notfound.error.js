const { StatusCodes } = require("http-status-codes");
const baseError = require("./base.error");

class Notfound extends baseError {
  constructor(resourceName, resourceValue) {
    super(
      "Not found",
      StatusCodes.NOT_FOUND,
      `The requested resource: ${resourceName} with value ${resourceValue} not found`,
      {
        resourceName,
        resourceValue,
      },
    );
  }
}

module.exports = Notfound;
