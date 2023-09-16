// middleware.js

const fs = require('fs');


const requestLogger = (req, res, next) => {
  const logMessage = `${new Date().toISOString()} - ${req.method} ${req.url}\n`;

  
  fs.appendFile('log.txt', logMessage, (err) => {
    if (err) {
      console.error('Error writing to log file:', err);
    }
  });

 
  next();
};

module.exports = {
  requestLogger,
};
