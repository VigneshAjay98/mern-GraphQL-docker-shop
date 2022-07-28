const mongoose = require('mongoose')
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcryptjs');
// const User = require('../database/models/user.js')
const User = mongoose.model('users')

passport.serializeUser((user, done) => {
    // console.log("***********Insilde serializeUser()***********")
  	done(null, user.id)
})

passport.deserializeUser((id, done) => {
    // console.log("***********Insilde deserializeUser()***********")
  	User.findById(id, (err, user) => {
        done(err, user)
    })
})

passport.use(new LocalStrategy({ usernameField: 'email' }, (email, password, done) => {
    // console.log("***********Insilde LoclStrategy***********")
    User.findOne({email}, async (err, user) => {
        if(err) return done(err);
        if(!user) {
            return done(null, false, 'Invalid Credentials')
        }
        const isMatch = await bcrypt.compare(password, user.password)
        if(!isMatch) {
            return done(null, false, 'Invalid Credentials') 
        }
        // console.log("***********User found in LocalStrategy***********")
        return done(null, user);
    })
}));