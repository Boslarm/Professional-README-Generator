// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ![License Badge](${renderLicenseBadge(data.license)})
  ## Table of Contents:
  - [Description] (#description)
  - [Installation] (#installation)
  - [Usage] (#usage)
  - [Contribution] (#contribution)
  - [Test Instructions] (#instructions)
  - [Contact Info] (#contact)
  - [License] (#license)

  ## Description
  ${data.descritption}
  
  ## Installation
 ${data.installation}
  ## Usage
${data.usage}
  ## Contribution

  ## Test Instructions

  ## Contact Info
  [GitHub](https://github.com/${data.gitHub})
  [Email](mailto:${data.email})

  ## License
  ${renderLicenseSection(data.license)}
`;
}

module.exports = generateMarkdown;