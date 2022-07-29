const path = require('path')
require('dotenv').config({ debug: true, path: path.resolve(__dirname + '/.env') })
const express = require('express')
const cors = require('cors')
const { graphqlHTTP } = require('express-graphql')
const session = require('express-session')
const passport = require('passport')
const MongoStore = require('connect-mongo')
const app = express()

const schema = require('./graphQL/schema.js')
require('./database/config.js')
require('./middlewares/auth.js')

var corsOptions = {
    origin: 'http://localhost:3010',
    credentials: true // <-- REQUIRED backend setting
};
app.use(cors(corsOptions));
// app.use(express.static(path.resolve(`./frontend/public`)))
app.use(session({
    secret: process.env.SESSION_SECRET,
    store: MongoStore.create({
        mongoUrl: process.env.DB_HOST
    }),
    resave: true,
    saveUninitialized: true,
    cookie: {
        secure: 'auto',
        expires:  24 * 60 * 60 * 1000
    }
 }))
app.use(passport.initialize())
app.use(passport.session())

app.use('/graphql', graphqlHTTP ({
    schema,
    graphiql: true
}))
app.use(require('./routes/router.js'))

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`*******Server running on port ${PORT}*******`) )