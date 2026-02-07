const logger = require("../config/logger.config");
const Notfound = require("../errors/notfound.error");
const { Problem } = require("../models/index");

class ProblemRepository {
  async createProblem(problemData) {
    try {
      const problem = await Problem.create({
        title: problemData.title,
        difficulty: problemData.difficulty,
        description: problemData.description,
        testCases: problemData.testCases ? problemData.testCases : [],
        editorial: problemData.editorial,
      });

      return problem;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async getAllProblems() {
    try {
      const problems = await Problem.find({});
      return problems;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async getProblem(id) {
    try {
      const problem = await Problem.findById(id);
      if (!problem) {
        logger.error(
          `Problem.Repository.getProblem: Problem with id: ${id} not found in the db`,
        );
        throw new Notfound("Problem", id);
      }
      return problem;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async deleteProblem(id) {
    try {
      const problem = await Problem.findByIdAndDelete(id);
      if (!problem) {
        logger.error(
          `Problem.Repository.deleteProblem: Problem with id: ${id} not found in the db`,
        );
        throw new Notfound("Problem", id);
      }
      return problem;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async updateProblem(id, updatedData) {
    try {
      const updatedProblem = await Problem.findByIdAndUpdate(id, updatedData, {
        new: true,
      });
      if (!updatedProblem) {
        logger.error(
          `Problem.Repository.updateProblem: Problem with id: ${id} not found in the db`,
        );
        throw new Notfound("Problem", id);
      }
      return updatedProblem;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}

module.exports = ProblemRepository;
