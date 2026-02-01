const { StatusCodes } = require("http-status-codes");
const NotImplemented = require("../errors/notImplemented.error");

function pingProblemServices(req, res) {
  return res.status(StatusCodes.OK).json({ message: "Server is Alive" });
}

// Get All Problems
function getProblems(req, res, next) {
  try {
    throw new NotImplemented("Add Problem");
  } catch (error) {
    next(error);
  }
}

// Create Problem
function createProblem(req, res, next) {
  try {
    throw new NotImplemented("Add Problem");
  } catch (error) {
    next(error);
  }
}

// Get Spicific Problem
function getSpecificProblem(req, res, next) {
  try {
    throw new NotImplemented("Add Problem");
  } catch (error) {
    next(error);
  }
}

// Update Problem
function updateProblem(req, res, next) {
  try {
    throw new NotImplemented("Add Problem");
  } catch (error) {
    next(error);
  }
}

// deleteProblem
function deleteProblem(req, res, next) {
  try {
    throw new NotImplemented("Add Problem");
  } catch (error) {
    next(error);
  }
}

// exports
module.exports = {
  pingProblemServices,
  getProblems,
  createProblem,
  getSpecificProblem,
  updateProblem,
  deleteProblem,
};
