// get all thoughts
// get a single thought
// post a thought
// put update a thought by id
// delete a thought by id

const { Thought, User} = require('../models')

const thoughtControllers = {
    getAllThoughts(req, res) {
        Thought
        .find({})
        .populate({
            path: "thought"
        })
        .then((data) => {res.json(data)})
    },
    getThoughtById(req, res){
        Thought
        .findOne({_id: req.params.thoughtId})
        .populate({
            path: "thought"
        })
        .then((data) => {res.json(data)})
    },
    createThought(req, res) {
        Thought
        .create(req.body)
        .then((data) => {res.json(data)})
        return User
        .findOneAndUpdate(
            {_id: req.body.userId},
            {$push: {thought: _id}},
            {new: true}
            )
        .then((data) => {res.json(data)})
    },
    updateThought(req, res){
        Thought
        .findOneAndUpdate({_id: req.params.thoughtId}, req.body, {
            new: true,
            runValidators: true
        })
        .then((data) => {res.json(data)})
    },
    deleteThought(req, res){
        Thought
        .findOneandDelete({_id: req.params.thoughtId})
        .then((data) => 
        {
            console.log(data)
            User
            .findOneAndUpdate(
                {
                    username: data.username
            },
            {
                $pull: { thought: req.params.thoughtId}
            },
            {new: true}
            )
            .then((userdata) => {res.json(userdata)})
        })
    },
    newReaction(req, res){
        Thought
        .findOneAndUpdate(
            {
                _id: req.params.thoughtId
            },
            {
                $push: {reaction: req.body}
            },
            {
                new: true, 
                runValidators: true
            }
        )
        .then((data) => {res.json(data)})
    },
    deleteReaction(req, res){
        Thought
        .findOneAndUpdate(
            {
                _id: req.params.thoughtId
            },
            {
                $pull: { reaction: {reactionId: req.params.reactionId}}
            },
            {
                new: true
            }
        )
        .then((data) => {res.json(data)})
    }
}

module.exports = thoughtControllers