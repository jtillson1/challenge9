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

];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
