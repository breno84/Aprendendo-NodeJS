//modelulo externo
const inquirer = require('inquirer');
const chalk = require('chalk');

//modulos internos

const fs = require('fs');

operation();

function operation() {

    inquirer.prompt([{
        type: 'list',
        name: 'action',
        message: 'O que voce deseja fazer?',
        choices: [
            'Criar conta',
            'Consultar saldo',
            'Depositar',
            'Sacar',
            'Sair'
        ]
    },
]).then().catch(err => console.log(err));

}