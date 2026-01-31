const express = require("express");

const { problemController } = require("../../controllers/index");

const problemRouter = express.Router();

problemRouter.get("/ping", problemController.pingProblemServices);

problemRouter.get("/", problemController.getProblems);

problemRouter.post("/", problemController.createProblem);

problemRouter.get("/:id", problemController.getSpecificProblem);

problemRouter.delete("/:id", problemController.deleteProblem);

problemRouter.patch("/:id", problemController.updateProblem);

module.exports = problemRouter;
