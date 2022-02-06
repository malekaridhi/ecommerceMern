const express = require('express')
const router = require("express").Router();
const User = require('../models/User')
const CryptoJS = require("crypto-js")
//REGISTER

router.post("/register",async(req,res)=>{
    const newUser = new User ({
        username: req.body.username,
        email: req.body.email,
        password:CryptoJS.DES.encrypt(req.body.password, process.env.PASS_SEC).toString()
    });

    try {
        const savedUser = await newUser.save()
        res.status(201).json(savedUser)
    } catch (err) {
      res.status(500).json(err)  
    }
})

router.post("/login",async(req,res)=>{
try {
    const user = await User.findOne({username : req.body.username})

    !user && res.status(401).json('no user found')

    const hasdPassword = CryptoJS.DES.decrypt(user.password, process.env.PASS_SEC);
    const password = hasdPassword.toString(CryptoJS.enc.Utf8)

    password !== req.body.password && res.status(401).json('no user found')


      res.status(200).json(user)
} catch (err) {
    res.status(500).json(err)
}
}) 














module.exports = router;