const winston = require("winston");

const allowedTransports = [];

// The below transport congif enable loggin on console
allowedTransports.push(
  new winston.transports.Console({
    format: winston.format.combine(
      winston.format.colorize(),
      winston.format.timestamp({
        format: "YYYY-MM-DD HH:mm:ss",
      }),
      // Second argument to the combine method, which defines what is exactly going to be printed in log
      winston.format.printf(
        (log) => `${log.timestamp}[${log.level}]:${log.message}`,
      ),
    ),
  }),
);

const logger = winston.createLogger({
  format: winston.format.combine(
    winston.format.timestamp({
      format: "YYYY-MM-DD HH:mm:ss",
    }),
    winston.format.printf(
      (log) => `${log.timestamp} [${log.level.toUpperCase()}]: ${log.message}`,
    ),
  ),
  transports: allowedTransports,
});

module.exports = logger;
