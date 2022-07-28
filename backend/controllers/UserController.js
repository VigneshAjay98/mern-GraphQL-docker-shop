const User = require('../database/models/User.js')
const bcrypt = require('bcryptjs')

class UserController
{
    // allUsers(req, res){
    //     try {
    //         User.find({}, function (err, users) {
    //             if(err) {
    //                 throw "Something went wrong"
    //             }
    //             res.status(200).send(users)
    //         })
    //     }
    //     catch(err) {
    //         res.status(500).send(err)
    //     }
    // }

    static async findById(id) {

        try {
            const user = await User.findById(id)
            if(!user) {
                throw "No records found"
            }
            return user
        } catch (err) {
            throw err
        }
    }

    // async profile(req, res) {
    //     res.send("You are now Logged in!")
    // }

    // edit(req, res) {
    //     try {
    //         User.findByIdAndUpdate(req.params._id, { $set: req.body}, {new: true, runValidators: true})
    //         .then((user) => {
    //             res.status(200).send(user)
    //         }).catch((err) => {
    //             res.status(404).send(err)
    //         })
    //     }
    //     catch(error) {
    //         res.status(500).send(error)
    //     }
    // }

    // create(req, res) {
    //     User.findOne({email: req.body.email}).then(user=>{
    //         if(user) {
    //             res.status(403).send(`Email already used</br>`)
    //         }else {
    //             const user = new User(req.body)
    //             user.password = bcrypt.hashSync(req.body.password, 10);

    //             user.save().then(() => {
    //                 res.status(201).send(req.body)
    //             }).catch((e) => {
    //                 res.status(400).send(e)
    //             })
    //         }
    //     }).catch(err=>{
    //         res.status(403).send("err")
    //     })
    // }
}

module.exports = UserController