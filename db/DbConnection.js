const mongoose = require('mongoose');
const connectionString = 'mongodb+srv://admin:adminpass@cluster0.hib0v.mongodb.net/products-api?retryWrites=true&w=majority'

const ConnectToDb = () => mongoose.connect(connectionString, { useNewUrlParser: true,useUnifiedTopology: true, useFindAndModify: false })

module.exports = {
    ConnectToDb,
}