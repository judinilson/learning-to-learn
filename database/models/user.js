const mongoose = require('mongoose')


//users

const usersSchema = new mongoose.Schema({

    username: String,
    email:String,
    password: String
    // username:{
    //     type: String,
    //     //required: [true,'please provide your username']
    // },
    // email:{
    //     type: String,
    //     unique: true
    //    // required: [true,'please provide your email']
    // },
    // password:{
    //     type: String,
    //     //required: [true,'please provide your password']
    // }
})

module.exports = mongoose.model('user',usersSchema)