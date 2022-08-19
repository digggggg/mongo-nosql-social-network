// get all users
// get a single user by id
// post a new user
// put update a user by id
// delete a user by id
const { User} = require("../models")


const usersControllers = {

getAllUsers(req, res) {
    User
    .find({})
    .then((data) => {res.json(data)})
},

getUserById(req, res) {
    User
    .findOne({_id: req.params.userId})
    .populate({
        path: "friends"
    })
    .populate({
        path: "thought"
    })
    .then((data) => {res.json(data)})
},

createUser(req, res) {
    User
    .create(req.body)
    .then((data) => {res.json(data)})
},

updateUser(req, res) {
    User
    .findOneAndUpdate({_id: req.params.userId}, req.body, {
        new: true,
        runValidators: true
    })
    .then((data) => {res.json(data)})
},

deleteUser(req, res){
    User
    .findOneAndDelete({_id: req.params.userId})
    .then((data) => {res.json(data)})
}
}

module.exports = usersControllers