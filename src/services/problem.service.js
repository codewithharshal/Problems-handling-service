const { markdownSanitizer } = require("../utils/index");

class ProblemService {
  constructor(problemRepository) {
    this.problemRepository = problemRepository;
  }

  async createProblem(problemData) {
    try {
      // 1. sanitize the markdown for description
      problemData.description = markdownSanitizer(problemData.description);
      const problem = await this.problemRepository.createProblem(problemData);

      return problem;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
  async getAllProblems() {
    const problems = await this.problemRepository.getAllProblems();
    return problems;
  }
}

module.exports = ProblemService;
