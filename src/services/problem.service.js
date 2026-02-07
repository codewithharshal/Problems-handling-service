const { markdownSanitizer } = require("../utils/index");

class ProblemService {
  constructor(problemRepository) {
    this.problemRepository = problemRepository;
  }

  async createProblem(problemData) {
    // 1. sanitize the markdown for description
    problemData.description = markdownSanitizer(problemData.description);
    const problem = await this.problemRepository.createProblem(problemData);
    return problem;
  }
  async getAllProblems() {
    const problems = await this.problemRepository.getAllProblems();
    return problems;
  }
  async getProblme(problemId) {
    const problme = await this.problemRepository.getProblem(problemId);
    return problme;
  }
  async deleteProblme(problemId) {
    const problme = await this.problemRepository.deleteProblem(problemId);
    return problme;
  }

  async updateProblem(problemId, problemData) {
    if (problemData?.description) {
      problemData.description = markdownSanitizer(problemData.description);
    }
    const problem = await this.problemRepository.updateProblem(
      problemId,
      problemData,
    );
    return problem;
  }
}

module.exports = ProblemService;
