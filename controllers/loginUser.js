const bcrypt = require('bcrypt')
const User = require('../database/models/User')
const jwt = require('jsonwebtoken')
const { env: { JWT_SECRET } } = process

module.exports = (req, res) => {
    const { email, password } = req.body
    //try to find the user
    User.findOne({email}, (error, user) => {
        if(user){
            bcrypt.compare(password, user.password, (error, same) =>{
                if(same){
                    const id = user._id
                    const token = jwt.sign({ sub: id }, JWT_SECRET)
                    res.json({
                        data: {
                            id,
                            token
                        }
                    })
                } else {
                    res.redirect('/auth/login')
                }
            })
        } else {
            return res.redirect('/auth/login')
        }
    })
}