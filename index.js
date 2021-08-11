/*
********
********
*NOTE: spacing in backticks (``) is intentional for formatting purposes*
********
*******
*/


// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// Array of License + Badges Options
const allLicenses = [
    {
        licenseName: 'ISC',
        hyperlinked_badge: '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)'
    },
    {
        licenseName: 'MIT',
        hyperlinked_badge: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
    },
    {
        licenseName: 'Mozilla',
        hyperlinked_badge: '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)',
    },
    {
        licenseName: 'Perl',
        hyperlinked_badge: '[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)',
    },
    {
        licenseName: 'Open Database',
        hyperlinked_badge: '[![License: ODbL](https://img.shields.io/badge/License-ODbL-brightgreen.svg)](https://opendatacommons.org/licenses/odbl/)',
    },
    {
        licenseName: 'Public Domain Dedication and License',
        hyperlinked_badge: '[![License: ODbL](https://img.shields.io/badge/License-PDDL-brightgreen.svg)](https://opendatacommons.org/licenses/pddl/)',
    },
    {
        licenseName: 'None',
        hyperlinked_badge: '[![License: ODbL](https://img.shields.io/badge/License-PDDL-brightgreen.svg)](https://opendatacommons.org/licenses/pddl/)',
    },
]
console.log(allLicenses)

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the name of the project?',
        name: 'projectName',
    },
    {
        type: 'input',
        message: 'Provide a short description of the project.',
        name: 'description',
    },
    {
        type: 'input',
        message: 'Provide installation instructions',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Describe or demonstrate how this project can be used',
        name: 'usage',
    },
    {
        type: 'list',
        message: 'Include any Licenses used (if not listed, leave blank and hit enter).',
        name: 'license',
        choices: [
            'ISC',
            'MIT',
            'Mozilla',
            'Perl',
            'Open Database',
            'Public Domain Dedication and License',
            'None'
        ]
    },
    {
        type: 'input',
        message: 'Include any requirements you have to accept contributions.',
        name: 'contributionGuidelines',
    },
    {
        type: 'input',
        message: 'Submit instructions for runnings tests',
        name: 'tests',
    },
    {
        type: 'input',
        message: 'Where can users contact you for questions regarding this project?',
        name: 'questions',
    },
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'username',
    },
];

// TODO: Create a function to initialize app
inquirer
    .prompt(questions)
    .then((response) => {
        // ReadMe Template Variable:
        let readMeFormat =
            `# ${response.projectName}

## Table of Contents
* [Description](#description)

* [Installation](#installation)

* [Usage](#usage)

* [Contribution Guidelines](#contribution-guidelines)

* [Test Instructions](#test-instructions)

* [Questions](#questions)

* [License](#license)

---

## Description
${response.description}


## Installation
Here are some guidelines to help you get started:

${response.installation}


## Usage
${response.usage}


## Contribution Guidelines
${response.contributionGuidelines}


## Test Instructions
${response.tests}


## Questions:

* Email: ${response.email}
* Github: [Github](https://github.com/${response.username})


`
    // Create ReadMe file
    fs.writeFile('README.md', readMeFormat, (err) =>
    err ? console.log('error with generator') : console.log('ReadMe generated!')
    )
    
    let { license } = response
    
    // Add License to README.md
    function renderLicenseBadge(license) {
        // If a license is selected, add corresponding badge:
        if (license != 'None'){
          for (let i = 0; i < allLicenses.length; i++){
              console.log('**************************')
              console.log('ENTERING FOR LOOP' + i)
              console.log('**************************')
              console.log(license)
              console.log(allLicenses[i])
              console.log(allLicenses[i].licenseName)
            if(license == allLicenses[i].licenseName){
                console.log('**************************')
                console.log('APPENDING TO FILE')
                console.log('**************************')
              fs.appendFile('README.md', `## License
${allLicenses[i].hyperlinked_badge}`, (err_badge) =>
            err_badge ? console.log('error with badge') : console.log('Badge appended')
              )
            }
          }
        }
      }
      renderLicenseBadge(license);
    })