const inquirer = require('inquirer');
const chalk = require('chalk');

inquirer.prompt([
    {name: 'nome', message: 'Qual seu nome?'},
    {name: 'idade', message: 'Qual sua idade?'}
])
.then((answers) => {
    const response = `O nome do usuario é ${answers.name} e ele tem ${answers.idade} anos!`

    console.log(chalk.bgYellow.black(response));

})
.chatch((err) => console.log(err))