const path = require('path');

//path absoluto

console.log(path.resolve('text.txt'));

//formar path

const midFolder = 'relatorios';
const fileName = 'breno.txt';

const finalPath = path.join('/','arquivo', midFolder, fileName);

console.log(finalPath);