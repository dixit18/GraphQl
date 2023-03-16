const path = require('path')
const express = require('express')
// const {buildSchema } = require('graphql')
// const {graphqlHTTP}=require('express-graphql')
const {ApolloServer} = require('apollo-server-express')
const {loadFilesSync}=require('@graphql-tools/load-files')
const {makeExecutableSchema} =  require('@graphql-tools/schema')

const typesArray = loadFilesSync(path.join(__dirname,'**/*.graphql'))
const resolversArray =loadFilesSync(path.join(__dirname,'**/*.resolvers.js'))
async function startApolloServer(){
    const app = express()

    const schema = makeExecutableSchema({
        typeDefs:typesArray,
        resolvers:resolversArray
    })
    const server = new ApolloServer({
        schema
    })
    await server.start()
    server.applyMiddleware({app,path:'/graphql'});

    app.listen(3000, ()=>{
        console.log('Running Graphql Server')
    })
}
startApolloServer();

// const schema = buildSchema()
// const root = {
//     products:require('./products/products.model'),
//     orders:require('./orders/oders.model')
   
// }

// app.use('/graphql',graphqlHTTP({
//     schema:schema,
//     // rootValue:root,
//     graphiql:true
// }))

// app.listen(3000, ()=>{
//     console.log('Running GraphQl server...')
// })
