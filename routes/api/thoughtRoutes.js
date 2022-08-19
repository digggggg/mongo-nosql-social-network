
const { Thought} = require('../models')

const thoughtControllers = {
    getAllThoughts(req, res) {
        Thought
        .find({})
        .populate({
            path: "thought"
        })
        .then((data) => res.json(data))
    },
    getThoughtById(req, res){
        Thought.findOne({})
    }
}

module.exports = thoughtControllers