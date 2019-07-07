const users = require('../database/models/user')

module.exports = (req,res) =>{

    users.create(req.body,(error,data) =>{
        
        res.redirect('/')
    })
}