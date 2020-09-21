// Module Wrapper Function
console.log(__filename);
console.log(__dirname);
var url = 'http://mylogger.io/log';

function log(message) {
    // Send an HTTP request
    console.log(message);
}

//module.exports.log = log;
//module.exports.endPoint = url;
module.exports = log;

