const express = require('express')
const router = require("express").Router();
const User = require ('../models/User')
const {
    verifyToken,
    verifyTokenAndAuthorization
} =require('./verifyToken')



router.put('/:id',verifyToken,(req,res)=>{

})



















module.exports = router;