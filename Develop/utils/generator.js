///This uses template literals to insert user responses into the sample readme. This generate code was exported to the index.js file

const generateReadme = (response) => {
return `# ${response.title}

## Description

${response.description}

## License

${response.license}

Click the badge above for more information on this license!

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
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

* [Click here for my Github!](${response.gitlink})
* [Click here to email me with any additional questions!](mailto:${response.email})
`
}

module.exports = {
    generateReadme
}