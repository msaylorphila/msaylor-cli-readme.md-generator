const inquirer = require('inquirer');
const fs = require('fs/promises');
const { generateReadme } = require('./utils/generator')
///above is the import of the generateReadme code
///these are the questions that are fed to inquirer
const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title'
    },
    {
        type: 'input',
        message: 'Please give us a short description of your program',
        name: 'description',
    },
    {
        type: 'input',
        message: 'What are the steps required to install your program?',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Please provide instructions and examples for use!',
        name: 'usage'
    },
    {
        type: 'input',
        message: 'Please tell us a way of testing your program!',
        name: 'testing'
    },
    {
        type: 'list',
        message: 'Please select a license for you README.md',
        choices: ['[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
        '[![License: Apache_2.0](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
        '[![License: EPL-1.0](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)'],
        name: 'license'
    },
    {   
        type: 'input',
        message: 'Please supply us with your github profile link!',
        name: 'gitLink'
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email'
    }
]
///this code takes the user response from inquirer and feeds the generateReadme function
///it then writes the file 'samplereadme.md' and uses the data from said function
const handleResponse = (response) => {
    const sampleReadme = generateReadme(response);
    fs.writeFile('sampleReadme.md', sampleReadme, 'utf-8')
    .then(() => console.log('file made'))
   .catch(err => console.log `Error: ${err}`) 

}

function init() {
    inquirer
  .prompt(questions)
  .then(handleResponse)
}

// Function call to initialize app
init();



