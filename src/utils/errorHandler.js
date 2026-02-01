const { StatusCodes } = require("http-status-codes");
const baseError = require("../errors/base.error");

function errorHandler(err, req, res, next) {
  if (err instanceof baseError) {
    return res.status(err.statusCode).json({
      success: false,
      message: err.message,
      error: err.details,
      data: {},
    });
  }

  // This block handles unexpected errors that are not part of the application's
  // defined error flow (e.g., programming bugs, runtime failures, or third-party errors).
  // It acts as a safety net to prevent the server from crashing and ensures
  // a consistent 500 Internal Server Error response.
  return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
    success: false,
    message: "Something went wrong",
    error: err,
    data: {},
  });
}

module.exports = errorHandler;
