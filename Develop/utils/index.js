const inquirer = require('inquirer').default;
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
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
    message: 'Please explain how to use your website:',
  },
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
