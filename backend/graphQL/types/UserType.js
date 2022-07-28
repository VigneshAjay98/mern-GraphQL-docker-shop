const { GraphQLObjectType, GraphQLString, GraphQLInt } = require('graphql')

const UserType = new GraphQLObjectType({
    name: 'User',
    fields: {
        name: { type: GraphQLString },
        email: { type: GraphQLString },
        role: { type: GraphQLString }
    }
});

module.exports = UserType