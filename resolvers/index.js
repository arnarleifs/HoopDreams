const request = require("request");

module.exports =  {
    Query: {
        allBasketballFields: async () => {
            request("https://basketball-fields.herokuapp.com/api/basketball-fields", (err, res, body) => {
            console.log(body)
            if (err) {
                return err
            }else{
                console.log("Hello")
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