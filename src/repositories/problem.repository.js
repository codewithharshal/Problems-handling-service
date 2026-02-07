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
