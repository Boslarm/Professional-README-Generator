// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js')

// TODO: Create an array of questions for user input
const questions = [{
    type: 'input',
    message: 'What is the title of your project?',
    name: 'title'
}, {
    type: 'input',
    message: 'Please describe your project.',
    name: 'description'
}, {
    type: 'input',
    message: 'How do you install your program?',
    name: 'installation'
}, {
    type: 'input',
    message: 'How do you use your program?',
    name: 'usage'
}, {
    type: 'input',
    message: 'Can others contribute to your project?',
    name: 'contribution'
}, {
    type: 'input',
    message: 'How do you test your application?',
    name: 'instructions'
}, {
    type: 'input',
    message: 'What is your GitHub username?',
    name: 'gitHub'
}, {
    type: 'input',
    message: 'What is your email?',
    name: 'email'
}, {
    type: 'list',
    message: 'Which license will you use?',
    choices: ['MIT', 'Apache 2.0', 'BSD 3', 'N/A'],
    name: 'license'
},
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();