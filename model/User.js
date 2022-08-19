const {Schema, model} = require('mongoose')

const userSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: true,
        trimmed: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [
            /.+@.+\..+/,
            "Please fill a valid email address",
          ]
    },
    thoughts: [{
        type: Schema.Types.ObjectId,
        ref: 'Thought'
    }],
    friends: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }],
    
},
{
    toJSON: {
        virtuals: true,
    },
    id: false
}
)

userSchema.virtual("friends").get(function() {
    return this.friends.length
})

const User = model("User", userSchema)

module.exports = User