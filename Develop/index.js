// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs/promises');
const { generateReadme } = require('./generator')


// GIVEN a command-line application that accepts user input
// WHEN I am prompted for information about my application repository
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
// WHEN I enter my project title
// THEN this is displayed as the title of the README
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README

// TODO: Create an array of questions for user input
// title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
// const questions = ["What was your motivation?", "Why did you build this project?", "What problem does it solve?", "What did you learn?"];
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
        message: 'Please supply a link to your linked in profile!',
        name: 'linkedinLink'
    }
]

const handleResponse = (response) => {
    const sampleReadme = generateReadme(response);
    console.log(generateReadme);
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



