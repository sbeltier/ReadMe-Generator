// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const markdown = require('./generateMarkdown.js')

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
        message: 'Include any Licenses used',
        name: 'license',
        choices: [
            'Apache 2.0',
            'Boost Software License 1.0',
            'BSD 3-Clause',
            'BSD 2-Clause',
            'CC0 1.0',
            'Eclipse Public License 1.0',
            'GNU GPL v3',
            'GNU GPL v2',
            'GNU AGPL v3',
            'GNU LGPL v3',
            'GNU FDL v1.3',
            'IBM Public License 1.0',
            'ISC License',
            'MIT',
            'Mozilla',
            'Perl',
            'Open Database',
            'Public Domain Dedication and License',
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
function init() {
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
            * Github: [Github](https://github.com/${username})


            ## License

            License: ${response.license}`
            .then (fs.writeFile('README.md', readMeFormat)
            )
        })
}

// Function call to initialize app
init();