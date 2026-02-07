const Notfound = require("../errors/notImplemented.error");
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
      const problem = await Problem.findById({ id });
      if (!problem) {
        throw new Notfound("Problem", id);
      }
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async deleteProblem(id) {
    try {
      const problem = await Problem.findByIdAndDelete({ id });
      if (!problem) {
        throw new Notfound("Problem", id);
      }
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}

module.exports = ProblemRepository;
