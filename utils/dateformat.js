function formatDate(date) {
    var newDate = date.getMonth() + "/" + (date.getMonth() + 1) + '/' + date.getFullYear()
    return newDate
}

module.exports = formatDate