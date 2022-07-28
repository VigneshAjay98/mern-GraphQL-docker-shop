const mongoose = require('mongoose')
const passport = require('passport')
const User = mongoose.model('users')

class AuthController 
{
    static async signup({ name, email, password, req }) {
        return await User.findOne({ email })
            .then(existingUser => {
                if(existingUser) throw new Error('Email already used')
                const user = new User({ name, email, password })
                return user.save()
            })
            .then(user => {
                return new Promise((resolve, reject) => {
                    req.login(user, (err) => {
                        if(err) reject(err)
                        resolve(user)
                    })
                })
            })
    }

    static async login({ email, password, req }) {
        // console.log("***********Inside login()***********")
        return await new Promise((resolve, reject) => {
            // console.log("***********Inside promise()***********")
            passport.authenticate('local', (err, user) => {
                // console.log("***********Passed deserializeUser() authenticate***********")
                if(!user) reject('Invalid Credentials')
                // console.log("***********User resolved in authenticate***********")
                req.login(user, () => resolve(user))
            })({ body: { email, password } })
        })
    }

    static logout(req) {
        const { user } = req
        req.logout(function(err) {
            if (err) { return next(err); }
        });
        return user;
        // req.logout(function(err) {
        //     if (err) { return next(err) }
        //     req.session.destroy(function (err) {
        //         res.redirect('/')
        //     })
        // })
    }

}

module.exports = AuthController