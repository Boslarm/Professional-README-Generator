// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'Apache 2.0') {
    return 'https://img.shields.io/badge/License-Apache_2.0-blue.svg'
  } else if (license === 'MIT') {
    return 'https://img.shields.io/badge/License-MIT-yellow.svg'
  } else if (license === 'BSD 2') {
    return 'https://img.shields.io/badge/License-BSD_2--Clause-orange.svg'
  } else if (license === 'BSD 3') {
    return 'https://img.shields.io/badge/License-BSD_3--Clause-blue.svg'
  } else if (license === '') {
    return ''
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'Apache 2.0') {
    return 'https://opensource.org/licenses/Apache-2.0'
  } else if (license === 'MIT') {
    return 'https://opensource.org/licenses/MIT'
  } else if (license === 'BSD 2') {
    return 'https://opensource.org/licenses/BSD-2-Clause'
  } else if (license === 'BSD 3') {
    return 'https://opensource.org/licenses/BSD-3-Clause'
  } else {
    return ''
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'Apache 2.0'){
    return `[${license}](${renderLicenseLink(license)})`
  } else if (license === 'MIT') {
    return `[${license}](${renderLicenseLink(license)})`
  } else if (license === 'BSD 2') {
    return `[${license}](${renderLicenseLink(license)})`
  } else if (license === 'BSD 3') {
    return `[${license}](${renderLicenseLink(license)})`
  } else {
    return ''
  }
 }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ![License Badge](${renderLicenseBadge(data.license)})
  ## Table of Contents:
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contribution](#contribution)
  - [Test Instructions](#instructions)
  - [Contact Info](#contact)
  - [License](#license)
  ## Description
  ${data.descritption}
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ## Contribution
  Can others contribute to this project?
  ${data.contribution}
  ## Testing Instructions
  ${data.instructions}
  ## Contact Info
  [GitHub](https://github.com/${data.gitHub})
  [Email](mailto:${data.email})
  ## License
  ${renderLicenseSection(data.license)}
`;
}

module.exports = generateMarkdown;