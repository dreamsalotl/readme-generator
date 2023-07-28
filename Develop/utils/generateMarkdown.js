function renderLicenseBadge(license) {
  if (license === "MIT") {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  }
  else if (license === "LGPL-v3.0") {
    return `[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)`
  }
  else if (license === "MPL-2.0") {
    return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
  }
  else if (license === "AGPL-3.0") {
    return `[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)`
  }
  else if (license === "Unlicense") {
    return `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`
  }
  else if (license === "Apache-2.0") {
    return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  }
  else if (license === "GPL-3.0") {
    return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
  }
  else {
    return ""
  }
}

function renderLicenseLink(license) {
  if (license === "MIT") {
    return `https://opensource.org/licenses/MIT`
  }
  else if (license === "LGPL-v3.0") {
    return `https://www.gnu.org/licenses/lgpl-3.0`
  }
  else if (license === "MPL-2.0") {
    return `https://opensource.org/licenses/MPL-2.0`
  }
  else if (license === "AGPL-3.0") {
    return `https://www.gnu.org/licenses/agpl-3.0`
  }
  else if (license === "Unlicense") {
    return `http://unlicense.org/`
  }
  else if (license === "Apache-2.0") {
    return `https://opensource.org/licenses/Apache-2.0`
  }
  else if (license === "GPL-3.0") {
    return `https://www.gnu.org/licenses/gpl-3.0`
  }
  else {
    return ""
  }
}

function renderLicenseSection(license) {
    if (license === "MIT") {
      return `This project is licensed under the MIT license.`
    }
    else if (license === "LGPL-v3.0") {
      return `This project is licensed under the LGPL v3 license.`
    }
    else if (license === "MPL-2.0") {
      return `This project is licensed under the MPL 2.0 license.`
    }
    else if (license === "AGPL-3.0") {
      return `This project is licensed under the AGPL v3 license.`
    }
    else if (license === "Unlicense") {
      return `This project is licensed under the Unlicense license.`
    }
    else if (license === "Apache-2.0") {
      return `This project is licensed under the Apache 2.0 license.`
    }
    else if (license === "GPL-3.0") {
      return `This project is licensed under the GPL v3 license.`
    }
    else {
      return ""
    }
}

function generateMarkdown(data) {
  renderLicenseBadge(data.license)
  renderLicenseLink(data.license)
  renderLicenseSection(data.license)

  return `# ${data.title}

## Description

${data.description}

## Table of Contents

[Installation](#installation)

[Usage](#usage)

[Contributing](#contributing)

[Tests](#tests)

[Questions](#questions)

## Installation

${data.installation}

## Usage

${data.usage}

## Contributing

${data.contributing}

## Tests

${data.tests}

## License

${renderLicenseBadge(data.license)}

${renderLicenseSection(data.license)}

${renderLicenseLink(data.license)}

## Questions

If you have any questions, feel free to contact me by email, or directly at my GitHub page.

[Email](mailto:${data.email})

[GitHub Page](https://www.github.com/${data.github})
`;
}

module.exports = generateMarkdown;

