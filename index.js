const{ApolloServer}= require('apollo-server')

const{mongoDB}=require('./config')

const {gql} = require(
    'graphql-tag'
)
const {mongoose}  = require ('mongoose')


const typeDefs = gql`
type Query{
    sayHi: String!
}`

const resolvers ={
 Query:{    
    sayHi:()=> "hello world"
 }
}

const server = new ApolloServer({
    typeDefs, resolvers
})
mongoose.connect(mongoDB, {useNewUrlParser:true}).then(
    ()=>{console.log("the database connected")
        return server.listen({port:5000})
    }
).then(res=>{
    console.log(`the server is running on ${res.url}`)
})
