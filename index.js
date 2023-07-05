// TODO: Add in necessary packages
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'name',
    message: 'Welcome to the README generator! Please provide your full name to start.'
  },
  {
    type: 'input',
    name: 'github username',
    message: 'Enter your GitHub username.'
  },
  {
    type: 'input',
    name: 'email address',
    message: "Enter your email address."
  },
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Please provide a brief description of your project:',
  },
  {
    type: 'input',
    name: 'instructions',
    message: 'What are the instructions for installation?',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Instructions for usage:'
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'How can others contribute to this project?'
  },
  {
    type: 'confirm',
    name: 'confirmLicenses',
    message: 'Would you like to include a license?',
    default: false
  },
  {
    type: 'list',
    name: 'licenses',
    message: 'What license would you like to include?',
    choides: ['MIT', 'GPL', 'CC--0'],
    when: ({ confirmLicenses}) => {
      if (confirmLicenses) {
        return true;
      } else {
        return false;
      }
    }
  }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log(`Successfully generated ${fileName}!`);
    }
  });
}

// TODO: Create a function to initialize app
function init() 
{
  inquirer
    .prompt(questions)
    .then((answers) => {
      // Process the user's answers and generate the README content
       const readmeContent = `
            # ${answers.title}

            ## Description
            ${answers.description}

            ## Instructions
            ${answers.instructions}
            `;
      // Write the README file
            writeToFile('README.md', readmeContent);
            })
            .catch((error) => {
            console.error(error);
            });
}

// Function call to initialize app
init();
