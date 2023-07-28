const fs = require('fs');
const inquirer = require('inquirer');
const utils = require('./utils');
const generateMarkdown = require('./utils/generateMarkdown.js')


inquirer
const questions = [
    {
        type: 'input',
        message: 'What is the name of your repository?',
        name: 'title'
    },
    {
        type: 'input',
        message: 'Enter a description about your application:',
        name: 'description'
    },
    {
        type: 'input',
        message: 'Enter installation instructions:',
        name: 'installation'
    },
    {
        type: 'input',
        message: 'Enter usage information:',
        name: 'usage'
    },
    {
        type: 'input',
        message: 'Enter information about how to contribute:',
        name: 'contribution'
    },
    {
        type: 'input',
        message: 'Enter information about tests:',
        name: 'tests'
    },
    {
        type: 'choices',
        message: 'Please choose a license for your project:',
        choices: ['MIT', 'LGPL-v3.0', 'MPL-2.0', 'AGPL-3.0', 'Unlicense', 'Apache-2.0', 'GPL-3.0'],
        name: 'choice'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile('README.md', generateMarkdown, err => {
        err ? error.log(err) : console.log("README.md Generated.");
    } )
}

// TODO: Create a function to initialize app
async function init() {
    const inputData = await inquirer.prompt(questions);
    console.log("Input saved.")

    const 
}

// Function call to initialize app
init();
