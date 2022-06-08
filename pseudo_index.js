// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    // Call fs write file function with passed file name and data as input arguments
    // You can either use async call with callback function or synchronous call
    // HINT: optional - use standard library function path to construct absolute path
    //  to the current folder and file name
}

// TODO: Create a function to initialize app
function init() {
    // 1. Make a call to inquirer.prompt with passed questions as input argument
    // 2. In .then callback, make a call to the utility function genereateMarkdown
    //  with passed answers from user input as input argument and
    //  store the return value to a data variable
    // 3. Make a call to writeToFile passed file name and data as input arguments
}

// Function call to initialize app
init();
