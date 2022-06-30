const mongoose = require('mongoose')

/* Connect met database */
async function connectDB() {
    const uri =
        'mongodb+srv://' +
        process.env.DB_USERNAME +
        ':' +
        process.env.DB_PASS +
        '@' +
        process.env.DB_HOST +
        '/' +
        process.env.DB_NAME +
        '?retryWrites=true&w=majority'

    try {
        mongoose.connect(uri);
    } catch (error) {
        throw error
    }
}

module.exports = connectDB