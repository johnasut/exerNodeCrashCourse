const EventEmitter = require('events');
const uuid = require('uuid');

// console.log(uuid.v4());
// console.log(uuid.v4());
// console.log(uuid.v4());
// console.log(uuid.v4());

class Logger extends EventEmitter {
    log(msg) {
        // Call (or raise) event
        this.emit('message', { id: uuid.v4(), msg });
    }
}

// module.exports = Logger;

// ** Run without exporting
const Logger = require('./logger');

const logger = new Logger();

logger.on('message', (data) => console.log('Called Listener', data));

logger.log('Goodbye Cruel World');
logger.log("I'm Batman");
logger.log('Where in the world is Carmen Sandiego');