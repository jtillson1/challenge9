// function to generate markdown for README
function generateMarkdown(data) {
  return `## ${data.projectTitle}
## License 
![badge](https://img.sheilds.io/badge/license-${data.license}-lightblue)<br />

## Description
${data.descritpion}

## Table of Contents 
* [Installation](#installation:)
* [Usage](#usage:)
* [Contribution](#contribution:)
* [Questions](#questions:)

## Installation
${data.installation}

## Usage
${data.usage}

## Contribution
${data.contribution}

## Questions
This project was developed by: [${data.githubName}(https://github.com/${githubName})<br />
With any questions, please reach out to ${data.email}
`;
}

module.exports = generateMarkdown;
