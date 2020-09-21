const log = require('./logger')

function sayHello(name) {
    console.log('Hello ' + name);
}

sayHello('Sergio');

console.log(); // global object

//setTimeout();
//clearTimeout();

//setInterval();
//clearInterval();

var message = ''; // only scoped to this file

console.log(global.message); // undefined

console.log(log);

log('message');