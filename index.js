// Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown.js")




// Creates a function to write README file
function writeToFile(data) {
    const generateContent = generateMarkdown(data);

    fs.writeFile('README.md', generateContent, (err) =>
        err ? console.log(err) : console.log('Successfully created README.md!')
    );
};

// Creates an array of questions for user input
const questions = ([
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of the project?',
    },
    {
        type: 'input',
        name: 'motivation',
        message: 'What was your motivation for this projct?',
    },
    {
        type: 'input',
        name: 'solve',
        message: 'What problem does this solve?',
    },
    {
        type: 'input',
        name: 'learn',
        message: 'What did you learn?',
    },
    {
        type: 'input',
        name: 'instalation',
        message: 'Provide any instalation instruction:',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide any usage instructions:',
    },
    {
        type: 'input',
        name: 'contribute',
        message: 'Provide any contributing guidlines:',
    },
    {
        type: 'input',
        name: 'test',
        message: 'Provide any test instructions:',
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter GitHub username:',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter emal address:',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license',
        choices: [
            "Apache-2.0",
            "GNU-3.0",
            "MIT",
            "None"
        ]
    },
])

// Creates a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((data) => {
            generateMarkdown(data);
            writeToFile(data);
        });
}

// Function call to initialize app
init();


