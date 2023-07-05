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


const writeToFile = data => {
  return new Promise((resolve, reject) => {
      // make a readme file and add to dist folder
      fs.writeFile('./dist/README.md', data, err => {
          // if there's an error, reject the Promise and send the error to .catch() method
          if (err) {
              reject (err);
              // return out of the function here to make sure the Promise doesn't continut to execute the resolve() function
              return;
          }
          // if everything went well, resolve the Promise and send the successful data to the .then() method
          resolve({
              ok: true,
              message: console.log('Success! Navigate to the "dist" folder to see your README!')
          });
      })
  })
}

// Initialize app
const init = () => {
  return inquirer.prompt(questions);
}

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
})