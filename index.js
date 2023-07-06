// TODO: Add in necessary packages
const inquirer = require('inquirer');
const { generateMarkdown } = require('./Develop/utils/generateMarkdown');
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
    name: 'installation',
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
    name: 'confirmLicenses2',
    message: 'Would you like to include a license? Please say yes or no.',
    choices: ['yes', 'no'],
    when: ({ confirmLicenses }) => !confirmLicenses
  },
  {
    type: 'list',
    name: 'licenses',
    message: 'What license would you like to include?',
    choices: ['MIT', 'GPL', 'CC--0'],
    when: ({ confirmLicenses, confirmLicenses2 }) =>
      confirmLicenses || confirmLicenses2 === 'yes'
  }
];

// Initialize app
const init = () => {
  return inquirer.prompt(questions);
};

const writeToFile = data => {
  fs.writeFile('README.md', data, err => {
    if (err) {
      console.error(err);
    } else {
      console.log('README file created successfully!');
    }
  });
};


// Function call to initialize app
init()
  .then(userInput => {
    return generateMarkdown(userInput);
  })
  .then(readmeInfo => {
    return writeToFile(readmeInfo);
  })
  .catch(err => {
    console.log(err);
  });
