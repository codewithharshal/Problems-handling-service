const { StatusCodes } = require("http-status-codes");
const { problemController } = require("../../src/controllers/index");
const { ProblemService } = require("../../src/services/index");

// Mock the services module
jest.mock("../../src/services/index");

describe("Problem Controller tests", () => {
  let req, res, next;

  beforeEach(() => {
    req = {};
    res = {
      status: jest.fn(() => res),
      json: jest.fn(),
    };
    next = jest.fn();
  });

  test("check Server is availble", async () => {
    await problemController.pingProblemServices(req, res, next);
    expect(res.status).toHaveBeenCalledWith(StatusCodes.OK);
    expect(res.json).toHaveBeenCalled();
    expect(next).not.toHaveBeenCalled();
  });

  test("should create a problem", async () => {
    const createData = {
      title: "Two Sum",
      description: "# Problem\nFind two numbers whose sum equals target",
    };

    const createdProblem = {
      id: "69871c797914459209f01484",
      ...createData,
    };

    req.body = createData;

    ProblemService.prototype.createProblem.mockResolvedValue(createdProblem);

    await problemController.createProblem(req, res, next);

    expect(ProblemService.prototype.createProblem).toHaveBeenCalledTimes(1);
    expect(ProblemService.prototype.createProblem).toHaveBeenCalledWith(
      createData,
    );
    expect(res.status).toHaveBeenCalledWith(StatusCodes.CREATED);
    expect(res.json).toHaveBeenCalled();
    expect(next).not.toHaveBeenCalled();
  });

  test("should get all problems", async () => {
    const problems = [];

    ProblemService.prototype.getAllProblems.mockResolvedValue(problems);

    await problemController.getProblems(req, res, next);

    expect(ProblemService.prototype.getAllProblems).toHaveBeenCalledTimes(1);
    expect(res.status).toHaveBeenCalledWith(StatusCodes.OK);
    expect(res.json).toHaveBeenCalled();
    expect(next).not.toHaveBeenCalled();
  });

  test("should get a specific problem", async () => {
    const problemId = "69871c797914459209f01484";
    req.params = { id: problemId };
    const problem = { id: problemId };
    ProblemService.prototype.getProblme.mockResolvedValue(problem);

    await problemController.getSpecificProblem(req, res, next);

    expect(ProblemService.prototype.getProblme).toHaveBeenCalledTimes(1);
    expect(res.status).toHaveBeenCalledWith(StatusCodes.OK);
    expect(res.json).toHaveBeenCalled();
    expect(next).not.toHaveBeenCalled();
  });

  test("should update a specific problem", async () => {
    const problemId = "69871c797914459209f01484";
    const updateData = {
      title: "Updated Title",
    };
    const updatedProblem = {
      id: problemId,
      ...updateData,
    };
    req.params = { id: problemId };
    req.body = updateData;

    ProblemService.prototype.updateProblem.mockResolvedValue(updatedProblem);

    await problemController.updateProblem(req, res, next);

    expect(ProblemService.prototype.updateProblem).toHaveBeenCalledTimes(1);
    expect(ProblemService.prototype.updateProblem).toHaveBeenCalledWith(
      problemId,
      updateData,
    );
    expect(res.status).toHaveBeenCalledWith(StatusCodes.OK);
    expect(res.json).toHaveBeenCalled();
    expect(next).not.toHaveBeenCalled();
  });

  test("should delete a problem", async () => {
    const problemId = "69871c797914459209f01484";
    req.params = { id: problemId };
    const problem = { id: problemId };

    ProblemService.prototype.deleteProblme.mockResolvedValue(problem);

    await problemController.deleteProblem(req, res, next);

    expect(ProblemService.prototype.deleteProblme).toHaveBeenCalledTimes(1);
    expect(res.status).toHaveBeenCalledWith(StatusCodes.OK);
    expect(res.json).toHaveBeenCalled();
    expect(next).not.toHaveBeenCalled();
  });
});

describe("Problem Controller tests with Errors", () => {
  let req, res, next;

  beforeEach(() => {
    req = {};
    res = {
      status: jest.fn(() => res),
      json: jest.fn(),
    };
    next = jest.fn();
  });

  test("should call next with error when update fails", async () => {
    const problemId = "69871c797914459209f01484";
    const updateData = { title: "Updated Title" };
    const error = new Error("Update failed");

    req.params = { id: problemId };
    req.body = updateData;
    ProblemService.prototype.updateProblem.mockRejectedValue(error);

    await problemController.updateProblem(req, res, next);

    expect(ProblemService.prototype.updateProblem).toHaveBeenCalledTimes(1);
    expect(next).toHaveBeenCalledWith(error);
    expect(res.status).not.toHaveBeenCalled();
  });

  test("should call next with error when getProblems fails", async () => {
    const error = new Error("Fetch failed");

    ProblemService.prototype.getAllProblems.mockRejectedValue(error);

    await problemController.getProblems(req, res, next);

    expect(ProblemService.prototype.getAllProblems).toHaveBeenCalledTimes(1);
    expect(next).toHaveBeenCalledWith(error);
    expect(res.status).not.toHaveBeenCalled();
  });

  test("should call next with error when getSpecificProblem fails", async () => {
    const problemId = "69871c797914459209f01484";
    const error = new Error("Fetch specific failed");

    req.params = { id: problemId };

    ProblemService.prototype.getProblme.mockRejectedValue(error);

    await problemController.getSpecificProblem(req, res, next);

    expect(ProblemService.prototype.getProblme).toHaveBeenCalledTimes(1);
    expect(next).toHaveBeenCalledWith(error);
    expect(res.status).not.toHaveBeenCalled();
  });

  test("should call next with error when deleteProblem fails", async () => {
    const problemId = "69871c797914459209f01484";
    const error = new Error("Delete failed");

    req.params = { id: problemId };

    ProblemService.prototype.deleteProblme.mockRejectedValue(error);

    await problemController.deleteProblem(req, res, next);

    expect(ProblemService.prototype.deleteProblme).toHaveBeenCalledTimes(1);
    expect(next).toHaveBeenCalledWith(error);
    expect(res.status).not.toHaveBeenCalled();
  });

  test("should call next with error when createProblme fails", async () => {
    const createData = {
      title: "Two Sum",
      description: "# Problem\nFind two numbers whose sum equals target",
    };

    const error = new Error("Create failed");

    req.body = createData;

    ProblemService.prototype.createProblem.mockRejectedValue(error);

    await problemController.createProblem(req, res, next);

    expect(ProblemService.prototype.createProblem).toHaveBeenCalledTimes(1);
    expect(next).toHaveBeenCalledWith(error);
    expect(res.status).not.toHaveBeenCalled();
  });
});
