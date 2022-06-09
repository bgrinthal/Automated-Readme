// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown.js")

// TODO: Create an array of questions for user input
const questions = ['What is the title of the project?',
'What was your motivation for this projct?',
'What problem does this solve?',
'What did you learn?',
'Provide any instalation instruction:',
'Provide any usage instructions:',
'Provide any contributing guidlines:',
'Provide any test instructions:',
'Enter GitHub username:',
'Enter emal address:',
'Choose a license'];

// TODO: Create a function to write README file
function writeToFile(data) {
    const generateContent = generateMarkdown(data);

    fs.writeFile('README.md', generateContent, (err) =>
      err ? console.log(err) : console.log('Successfully created README.md!')
    );
  };
    // Call fs write file function with passed file name and data as input arguments
    // You can either use async call with callback function or synchronous call
    // HINT: optional - use standard library function path to construct absolute path
    //  to the current folder and file name


// TODO: Create a function to initialize app
function init() {
    // 1. Make a call to inquirer.prompt with passed questions as input argument
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'title',
                message: questions[0],
            },
            {
                type: 'input',
                name: 'motivation',
                message: questions[1],
            },
            {
                type: 'input',
                name: 'solve',
                message: questions[2],
            },
            {
                type: 'input',
                name: 'learn',
                message: questions[3],
            },
            {
                type: 'input',
                name: 'instalation',
                message: questions[4],
            },
            {
                type: 'input',
                name: 'usage',
                message: questions[5],
            },
            {
                type: 'input',
                name: 'contribute',
                message: questions[6],
            },
            {
                type: 'input',
                name: 'test',
                message: questions[7],
            },
            {
                type: 'input',
                name: 'github',
                message: questions[8],
            },
            {
                type: 'input',
                name: 'email',
                message: questions[9],
            },
            {
                type: 'list',
                name: 'license',
                message: questions[10],
                choices: [
                    "Apache",
                    "GNU",
                    "MIT",
                    "Open",
                    "None"
                ]
            },
        ])
    // 2. In .then callback, make a call to the utility function genereateMarkdown
    //  with passed answers from user input as input argument and
    //  store the return value to a data variable
    .then((data) => {
        generateMarkdown(data);
        writeToFile(data);
    });
    // 3. Make a call to writeToFile passed file name and data as input arguments
}

// Function call to initialize app
init();
