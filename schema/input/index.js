const moment = require("moment");

// TODO Change Start and end to Moment!
const Moment = require("moment");
console.log(Moment.now());


module.exports = `
    input PickupGameInput {
        start: Int! 
        end: Int! 
        basketballFieldId: String! 
        hostId: String!
    }

    input PlayerInput {
        name : String!
    }
`;

// TODO Add Signup Player Input