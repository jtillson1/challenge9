const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');



// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'githubName',
        messgae: 'Enter your github username',
        validate: githubNameInput => {
            if (githubNameInput) {
                return true;
            } else {
                console.log('Please actually enter your Github Username...');
                return false;

            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address',
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('Please actually enter your email address...');
                return false;
            }
        }

    },
    {
        type: 'input',
        name: 'projectTitle',
        message: 'What is the title of your project?',
        validate: projectTitleInput => {
            if (projectTitleInput) {
                return true;
            } else {
                console.log('Please enter your project title');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'descritpion',
        message: 'Please add a description of your project',
        validate: projectDescription => {
            if (projectDescription) {
                return true;
            } else {
                console.log('You have to say a few words about your project... users need the description!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the installation instructions for your project?',
        validate: installationInput => {
            if (installationInput) {
                return true;
            } else {
                console.log('please enter installation instructions');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please instruct the user on the usage of your project'
    },
    {
        type: 'checkbox',
        name: 'languages',
        message: 'Which language(s) did you use for this project? Select choice(s) with the space bar',
        choices: ['HTML', 'CSS', 'JavaScript', 'JQuery', 'ES6', 'Bootstrap', 'Node']
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please choose a license for your project',
        choices: ['MIT', 'Mozilla', 'Apache', 'Boost', 'ISC', 'Open Database', 'Eclipse', 'Public Domain', 'IBM', 'Other',]
        
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'List the collaborators on this project (if none, type NONE)',

    }
];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data);
}

// function to initialize program
function init() {
    inquirer
.prompt(questions)
.then(answers => {
    console.log(answers);
    const newMarkdown = generateMarkdown(answers);
    console.log(newMarkdown);
    writeToFile('readme.md', newMarkdown);
});

}

// function call to initialize program
init();
