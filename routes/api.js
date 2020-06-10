//api endpoints
const User = require('../models/user');
const express = require('express');
const router = express.Router();

const mongoose = require("mongoose")
const db = "mongodb://localhost:27017/eventsdb"

mongoose.connect(db, err => {
    if(err){
        console.err('Error!'+err)
    }
    else{
        console.log("Connected to MongoDB")
    }
})

router.get('/', (req, res) => {
    res.send("from API Route");
})


router.post('/register',(req,res)=>{
    let userData = req.body
    let user = new User(userData)

    user.save((error, registeredUser) => {
        if(error){
            console.log(error)
        }
        else{
            res.status(200).send(registeredUser)
        }
    })
})

module.exports = router
