const fs = require('fs');

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(license) {
  if (!license) {
    return ``;
  } else {
    return `[![${license} license](https://img.shields.io/badge/License-${license}-blue.svg)](${renderLicenseLink(license)})`;
  }
  }
// returns the license badge

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'MIT') {
    return `http://lbesson.mit-license.org/`
  }
  if (license === 'GPL') {
    return `http://perso.crans.org/besson/LICENSE.html`
  }
  if (license === 'CC--0') {
    return `http://creativecommons.org/licenses/by-nd/4.0`
  }
}
// returns the license link

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return ``;
  } else {
    return `## Licenses
    This project is covered under the ${license} license. To learn more about what this means, click the license button at the top.`
  }
}

// TODO: Create a function to generate markdown for README


function generateMarkdown(data) {
  return `# ${data.title}
 ${renderLicenseBadge(data.licenses)}
 ## Table of Contents
 * [Description](#description)
 * [Installation](#installation)
 * [Usage](#usage)
 * [Licenses](#licenses)
 * [Contributing](#contributing)
 * [Questions](#questions)
 * [Credits](#credits)

 ## Description
 ${data.description}

 ## Installation
 ${data.installation}

 ## Usage
 ${data.usage}

 ${renderLicenseSection(data.licenses)}

 ## Contributing
 ${data.contributing}

 ## Questions
 Have questions about this project?  
 GitHub: https://github.com/${data.github}  
 Email: ${data.email}

 ## Credits
 ${data.name}
`;
}

module.exports = { generateMarkdown };