const response = require('./index.js')
// console.log(response.responseArr)
const generateReadme = (response) => {
// do a module.export of response and make each of these ${response.whatever}
    // ['title, description, installation, usage, input, listContrib, testing, license, gitlink, linkedinLink']
return `# ${response.title}

## Description

${response.description}
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Contributing](#contributing)
- [Testing](#testing)
- [Questions](#questions)


## Installation

${response.installation}
## Usage
${response.usage}
![alt text](////screenshotlinkhere)
## License

${response.license}
(https://opensource.org/licenses/Apache-2.0)
(https://opensource.org/licenses/MIT)
(https://opensource.org/licenses/EPL-1.0)

## Contributing

For a guide on how to contribute please refer to the [Contributor Covenant](https://www.contributor-covenant.org/version/2/1/code_of_conduct/)

## Testing
${response.testing}
## Questions
[Link text Here](${response.gitlink})
[Link text Here](${response.linkedinLink})
`
}

module.exports = {
    generateReadme
}