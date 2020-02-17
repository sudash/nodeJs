const Logger = require('./logger');

const loggerObject = new Logger();

loggerObject.on("loggerEvent", (eventArgs) => {
    console.log("Logger listener called", eventArgs);
});

loggerObject.log("this is second message");

// regisgering a listenere