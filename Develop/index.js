const fs = require('fs');
const inquirer = require('inquirer');
const util = require('util');
const generateMarkdown = require('./utils/generateMarkdown.js')
const outputCyanText = (text) => console.log(`\x1b[36m${text}\x1b[0m`);

// Array of questions for user input

const questions = [
    {
        type: 'input',
        message: 'What is the name of your application?',
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
        name: 'contributing'
    },
    {
        type: 'input',
        message: 'Enter information about tests:',
        name: 'tests'
    },
    {
        type: 'list',
        message: 'Please choose a license for your project:',
        choices: ['MIT', 'LGPL-v3.0', 'MPL-2.0', 'AGPL-3.0', 'Unlicense', 'Apache-2.0', 'GPL-3.0'],
        name: 'license'
    },
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'github'
    },
    {
        type: 'input',
        message: 'Please enter your email address',
        name: 'email'
    }
];

// Function to write README file

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data,  err => {
        err ? console.error(err) : outputCyanText("README.md Generated.");
    } )
}

const fileWrite = util.promisify(writeToFile);

// Function to initialize app

async function init() {
    const inputData = await inquirer.prompt(questions);
    console.log("Input saved.");

    const markdown = generateMarkdown(inputData);

    await fileWrite('~README.md', markdown);
}

// Function call to initialize app

init();
