const { GraphQLSchema } = require('graphql')
const RootQuery = require('./rootQuery.js')
const mutation = require('./mutations.js')

module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation
})