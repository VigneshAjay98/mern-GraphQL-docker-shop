const { GraphQLObjectType, GraphQLString } = require('graphql')
const AuthController = require('../controllers/AuthController.js')
const UserType = require('./types/UserType.js')

const mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        signup: {
            type: UserType,
            args: {
                name: { type: GraphQLString },
                email: { type: GraphQLString },
                password: { type: GraphQLString }
            },
            resolve(parentValue, { name, email, password }, req) {
                return AuthController.signup({ name, email, password, req })
            }
        },
        login: {
            type: UserType,
            args: {
                email: { type: GraphQLString },
                password: { type: GraphQLString }
            },
            resolve(parentValue, { email, password }, req) {
                return AuthController.login({ email, password, req })
            }
        },
        logout: {
            type: UserType,
            resolve(parentValue, args, req) {
                return AuthController.logout(req)
            }
        }
    }
})

module.exports = mutation