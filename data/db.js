const {MongoClient} = require('mongodb');

// 1
const MONGO_URL = "mongodb+srv://danield18@ru.is:sumar123@cluster0.3oup2.mongodb.net/HoopDreams?retryWrites=true&w=majority";;

// 2
module.exports = async () => {
  const db = await MongoClient.connect(MONGO_URL);
  return {Links: db.collection('links')};
}   