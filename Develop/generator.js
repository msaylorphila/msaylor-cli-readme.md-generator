const generateReadme = (response) => {
return `# ${response.title}

## Description

${response.description}

## License

${response.license}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [Contributing](#contributing)
- [Testing](#testing)
- [Questions](#questions)


## Installation

${response.installation}

## Usage

${response.usage}

## Contributing

For a guide on how to contribute please refer to the [Contributor Covenant](https://www.contributor-covenant.org/version/2/1/code_of_conduct/)

## Testing

${response.testing}

## Questions

[Click here for my Github!](${response.gitlink})
[Click here for my LinkedIn!](${response.linkedinLink})
`
}

module.exports = {
    generateReadme
}