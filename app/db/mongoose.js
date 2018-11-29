const mongoose = require('mongoose');
const config = require('../config');

mongoose.connect(config.dbURI,{ useNewUrlParser: true });

mongoose.connection.on('error',()=>{
    console.log("mongodb connection failed")
});

module.exports = {
    mongoose
}
