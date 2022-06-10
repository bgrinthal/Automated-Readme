// This function returns a license badge based on which license is passed in
// If there is no license, returns an empty string

function renderLicenseBadge(license) {
  if (license === 'None') {
    return ``
  } else {
    return `
  ![badge](https://img.shields.io/badge/license-${license}-brightgreen)`
  }
}
console.log()

// Creates a function that returns the license link
// If there is no license, returns an empty string

function renderLicenseLink(license) {
  if (license === 'None') {
    return ``
  } else {
    return `
  License Link: <a href="https://choosealicense.com/licenses/${license}/">${license}</a>
     `
  }
}

// Creates a function that returns the license section of README
// If there is no license, returns an empty string

function renderLicenseSection(license) {
  if (license === 'None') {
    return ``
  } else {
    return `
  ## License

  This application is covered by the ${license} license. `
  } 
}

// Creates a function to generate markdown for README
function generateMarkdown(data) {

  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

  ## Description
  
  - What was your motivation?
  ${data.motivation}

  - What problem does it solve?
  ${data.solve}

  - What did you learn?
  ${data.learn}
  
  ## Table of Contents
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  
  ## Installation
  ${data.instalation}
  
  ## Usage
  ${data.usage}
  
  ${renderLicenseSection(data.license)}
  ${renderLicenseLink(data.license)}
  
  ## How to Contribute
  ${data.contribute}

  ## Tests
  ${data.test}

  ## Any Questions?
  -Please contact me through:
  GitHub:  <a href="https://github.com/${data.github}">${data.github}</a><br>
  Email:   <a href="mailto:${data.email}">${data.email}</a>
`;
}

module.exports = generateMarkdown;
