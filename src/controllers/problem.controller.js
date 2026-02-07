const { StatusCodes } = require("http-status-codes");
const NotImplemented = require("../errors/notImplemented.error");
const { ProblemService } = require("../services/index");
const { ProblemRepository } = require("../repositories/index");

const problemService = new ProblemService(new ProblemRepository());

function pingProblemServices(req, res) {
  return res.status(StatusCodes.OK).json({ message: "Server is Alive" });
}

// Get All Problems
async function getProblems(req, res, next) {
  try {
    const response = await problemService.getAllProblems();
    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Successfully fetch all the product",
      error: {},
      data: response,
    });
  } catch (error) {
    next(error);
  }
}

// Create Problem
async function createProblem(req, res, next) {
  try {
    const newProblem = await problemService.createProblem(req.body);
    return res.status(StatusCodes.CREATED).json({
      success: true,
      message: "Successfully created a new problem",
      error: {},
      data: newProblem,
    });
  } catch (error) {
    next(error);
  }
}

// Get Spicific Problem
async function getSpecificProblem(req, res, next) {
  try {
    const problem = await problemService.getProblme(req.params.id);
    return res.status(StatusCodes.OK).json({
      success: true,
      error: {},
      message: "Successfully fetch a problme",
      data: problem,
    });
  } catch (error) {
    next(error);
  }
}

// Update Problem
function updateProblem(req, res, next) {
  try {
    throw new NotImplemented("update Problme");
  } catch (error) {
    next(error);
  }
}

// deleteProblem
function deleteProblem(req, res, next) {
  try {
    throw new NotImplemented("Delete Problem");
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
