const { ApolloServer } = require('apollo-server');
const typeDefs = require("./schema");
const resolvers = require("./resolvers");
const mongoose = require("mongoose");


const startServer = async () => {

    const mongodb = "mongodb+srv://danield18:Kjani123@cluster0.3oup2.mongodb.net/HoopDreams?retryWrites=true&w=majority"
    const db = await mongoose.connect(mongodb, {useNewUrlParser: true, useUnifiedTopology: true})

    const server = new ApolloServer({
        typeDefs,
        resolvers,
    });

    server.listen()
        .then(({ url }) => console.log(`GraphQL Service is running on ${ url }`));
};

startServer()
