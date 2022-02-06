const express = require('express')
const router = require("express").Router();
const User = require ('../models/User')
const {
    verifyToken,
    verifyTokenAndAuthorization
} =require('./verifyToken')



router.put('/:id',verifyTokenAndAuthorization,async(req,res)=>{
if (req.body.password){
    req.body.password= CryptoJS.DES.encrypt(
        req.body.password,
        process.env.PASS_SEC
      ).toString();
}
try {
    const updatedUser = await User.findByIdAndUpdate(req.params.id,{
        $set : req.body
        //take everything iside req.body and set it again
    },{new:true})
    res.status(200).json(updatedUser)
} catch (err) {
    res.status(500).json(err)
}
})



















module.exports = router;