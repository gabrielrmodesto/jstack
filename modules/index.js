//modulo criado e exportado
const printName = require('./printName');
printName('Gabriel');

//modulo nativo do node
const os = require('os');
console.log(os.type());