const $ = require('jquery');

const sayHello = name => {console.log(`hello ${name}`)};

sayHello('bobby');

// $('body').css("background-color", 'red');

const helloStr = require('./say-hello.js');
console.log(helloStr);