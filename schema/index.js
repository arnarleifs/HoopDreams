const queries = require("./queries");
const types = require("./types");
const inputs = require("./input");
const enums = require("./enums");

module.exports = `
    ${queries}

    ${types}

    ${inputs}

    ${enums}
`