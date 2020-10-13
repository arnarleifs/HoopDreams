const request = require("request");

module.exports =  {
    Query: {
        allBasketballFields: async () => {
            // This request function call needs to be returned - because it is a Promise and the resolvers knows how to resolve the promise, because it is async by nature
            request("https://basketball-fields.herokuapp.com/api/basketball-fields", (err, res, body) => {
                // Here you are inside a callback function - which is not the same function as the outer function allBasketballFields
                console.log(body)
                if (err) {
                    return err
                } else {
                    console.log("Hello")
                    // This return only returns from the callback function - and request will return a promise
                    return JSON.parse(body);
                }
            })
        },
        basketballField: async (id) => {
            request("$https://basketball-fields.herokuapp.com/api/basketball-fields/{id}", (err, res, body) => {
            if(err) {
                return err
            }else{
                return res
            }
        })
        },
        allPickupGames: () => [],
        allPlayers: () => [],
        pickupGame: () => [],
        player: () => [],
    }   
}; 
