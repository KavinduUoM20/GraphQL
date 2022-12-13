const {ApolloServer, gql} = require('apollo-server');

//Create Schema
const typeDefs = gql`
    type Query {
        employees : [Employee]
    }
    type Employee {
        id : ID!
        firstName : String,
        lastName : String,
        designation : String,
        department : String,
        city : String
    }
`
//Create Apollo Server
const gqlServer = new ApolloServer({typeDefs});

//Start the Server
//Here we can ask the port from env var 
gqlServer.listen({port: process.env.port||4000})
.then(({url})=>console.log(`GraphQL server started on ${url}`))