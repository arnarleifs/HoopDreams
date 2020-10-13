// TODO addPlayerToPickupGame

// TODO removePLayerFromPickupGame

module.exports = `
    type Mutation {
        createPickupGame(PickupGameInput!) : PickupGame!
    }

    type Mutation {
        createPlayer(PlayerInput!) : Player!
    }

    type Mutation {
        removePickupGame(id: Int!) : Boolean!
    }

    type Mutation {
        removePlayer(id: Int!) : Boolean!
    }

    type Mutation {
        updatePlayer(id: Int! ) : Player!
    }
`; 