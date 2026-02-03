const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  port: process.env.SERVER_PORT || 3000,
  ATLAS_DB_URL: process.env.ATLAS_DB_URL || "",
  NODE_ENV: process.env.NODE_ENV,
};
