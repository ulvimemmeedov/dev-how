const mongoose = require('mongoose');
const connection = mongoose.createConnection("mongodb+srv://ulvimemmedov:0519770884@ulvimemmedov.1rkuq.mongodb.net/test?retryWrites=true&w=majority", { useNewUrlParser: true, useFindAndModify:false, useUnifiedTopology: true,useCreateIndex:true })
const Schema = mongoose.Schema;
module.exports = { Schema, connection };
