const {connect, connection} = require('mongoose')

connect('mogngodb://localhost/', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

module.exports = connection