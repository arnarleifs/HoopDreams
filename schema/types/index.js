const BasketballFieldStatus = require("../enums/BasketballFieldStatus")

// TODO Change YearOfCreation, Start, End to Moment

module.exports = `
    type BasketballField {
        id: ID!
        name: String!
        capacity: Int!
        yearOfCreation: String!
        status: BasketballFieldStatus!
        pickupGames: [PickupGame!]!
    }

    type PickupGame {
        id: ID!
        start: Int!
        end: Int!
        location: BasketballField!
        registeredPlayers: [Player!]!
        host: Player!
    }

    type Player {
        id: ID!
        name: String!
        playedGames: [PickupGame!]!
    }
`;