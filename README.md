# Backend Problems Handling Services

This is a Node.js/Express backend service for handling problems. The project follows a modular architecture with controllers, routers, and configuration files to manage API endpoints.

## File Descriptions

### Main Files

- **`src/index.js`**: The entry point of the application. Sets up the Express server, middleware, and mounts the API routes. Also includes a basic `/ping` endpoint to check server health.
- **`package.json`**: Defines project metadata, dependencies (e.g., Express, dotenv), and scripts (e.g., `npm run dev` for development).

### Configuration

- **`src/config/server.config.js`**: Loads environment variables using dotenv and exports server configuration like the port number.

### Controllers

Controllers handle the business logic for API endpoints. They process requests and send responses.

- **`src/controllers/problem.controller.js`**: Contains functions for handling problem-related operations (e.g., getProblems, createProblem). These functions are currently empty stubs and need implementation.
- **`src/controllers/index.js`**: An index file that exports all controllers (e.g., problemController) from the controllers directory. This allows for cleaner imports in other files, promoting modularity and organization.

### Routes

Routes define the API endpoints and map them to controller functions.

- **`src/routes/v1/problem.routes.js`**: Defines routes for problem endpoints (e.g., GET /ping, GET /, POST /). Uses Express Router to group related routes.
- **`src/routes/v1/index.js`**: An index file that creates the v1Router and mounts the problemRouter under `/problems`. This organizes routes by version.
- **`src/routes/index.js`**: An index file that creates the apiRouter and mounts the v1Router under `/v1`. This serves as the main API router.

## API Flow Example

For a request to `/api/v1/problems/ping`:

1. The request reaches `src/index.js`, which mounts `/api` to `apiRouter`.
2. `apiRouter` (from `src/routes/index.js`) mounts `/v1` to `v1Router`.
3. `v1Router` (from `src/routes/v1/index.js`) mounts `/problems` to `problemRouter`.
4. `problemRouter` (from `src/routes/v1/problem.routes.js`) routes `/ping` to `problemController.pingProblemServices`.
5. The controller function handles the request (currently a stub).

## Getting Started

1. Install dependencies: `npm install`
2. Start the server: `npm run dev`
3. The server runs on port 3000 (or as specified in environment variables).

## Available Endpoints

- `GET /ping`: Check server health.
- `GET /api/v1/problems/ping`: Ping the problems service.
- Other problem endpoints are defined but not implemented.
