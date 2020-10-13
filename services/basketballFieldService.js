const request = require("request");

class BasketBallFieldService {

    getAllBasketBallFields() {
        request("https://basketball-fields.herokuapp.com/api/basketball-fields", (err, res, body) => {
            console.log(res)
            console.log(body)
            if (err) {
                return err
            }else{
                return body
            }
        })
    }
  
    getBasketBallField(id) {
        request("$https://basketball-fields.herokuapp.com/api/basketball-fields/{id}", (err, res, body) => {
            if(err) {
                return err
            }else{
                return body
            }
        })
    }
}

module.exports = {
    BasketBallFieldService
};