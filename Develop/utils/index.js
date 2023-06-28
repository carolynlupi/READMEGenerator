// TODO: Include packages needed for this application 
// Added in package-lock.json

const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
{
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?'
},
{
    type: 'input',
    name: 'description',
    message: 'Please provide a brief description of your project.'
},
{
    type: 'input',
    name: 'instructions',
    message: 'Please explain how to use your website.'
}
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if(err) {
            console.error(err);
        } else {
            console.log(`Successfully generated ${filename}!`);
        }
    })
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
