function pingProblemServices(req, res) {
  return res.status(200).json({ message: "Server is Alive" });
}

// Get All Problems
function getProblems(req, res) {
  return res.status(501).json({ message: "Not implemented" });
}

// Create Problem
function createProblem(req, res) {
  return res.status(501).json({ message: "Not implemented" });
}

// Get Spicific Problem
function getSpecificProblem(req, res) {
  return res.status(501).json({ message: "Not implemented" });
}

// Update Problem
function updateProblem(req, res) {
  return res.status(501).json({ message: "Not implemented" });
}

// deleteProblem
function deleteProblem(req, res) {
  return res.status(501).json({ message: "Not implemented" });
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
