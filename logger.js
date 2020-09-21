const EventEmitter = require('events');

// Module Wrapper Function
console.log(__filename);
console.log(__dirname);
var url = 'http://mylogger.io/log';

class Logger extends EventEmitter{

    log(message) {
        // Send an HTTP request
        console.log(message);

        // Raise an event
        this.emit('messageLogged', { id: 1, url: 'http://' });
    }
}

//module.exports.log = log;
//module.exports.endPoint = url;
module.exports = Logger;

