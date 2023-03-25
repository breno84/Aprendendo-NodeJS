const _ = require('lodash');
const chalk = require('chalk');

const a = [1,2,3,4,5,6];
const b = [7,8,9,0,10];

const diff = _.difference(b,a);

console.log(chalk.bgRed.bold(diff));