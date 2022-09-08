const {Schema, Types} = require('mongoose')
const formatDate = require('../utils/dateformat')

const reactionSchema = new Schema ({
    reactionId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId
    },
    ractionBody: {
        type: String,
        required: true,
        maxLength: 280
    },
    username: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now(),
        get: (date) => formatDate(date)
    }
})

module.exports = reactionSchema