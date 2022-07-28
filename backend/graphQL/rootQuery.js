const { GraphQLObjectType, GraphQLString, GraphQLInt } = require('graphql')
const UserController = require('../controllers/UserController.js')
const UserType = require('./types/UserType.js')

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        user: {
            type: UserType,
            args: { id: { type: GraphQLString } },
            resolve(parentValue, args) {
                const user = UserController.findById(args.id)
                if(!user) {
                    return "error"
                }
                return user
            }
        },
        currentUser: {
            type: UserType,
            resolve(parentValue, args, req) {
                const { user } = req
                if(!user) throw new Error('Not authorized')
                return user
            }
        }
    }
});

module.exports = RootQuery