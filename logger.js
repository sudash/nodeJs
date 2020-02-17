const EventEmitter = require('events');

class Logger extends EventEmitter {

    log(message) {
        console.log(message);
        this.emit("loggerEvent", { msg: message });
    }

}

module.exports = Logger;