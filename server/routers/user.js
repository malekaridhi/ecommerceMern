const express = require('express')
const router = require("express").Router();
const User = require ('../models/User')
const {
    verifyToken,
    verifyTokenAndAuthorization,
    verifyTokenAndAdmin
} =require('./verifyToken')



// router.put('/:id',verifyTokenAndAuthorization,async(req,res)=>{
// if (req.body.password){
//     req.body.password= CryptoJS.DES.encrypt(
//         req.body.password,
//         process.env.PASS_SEC
//       ).toString();
// }
// try {
//     const updatedUser = await User.findByIdAndUpdate(req.params.id,{
//         $set : req.body
//         //take everything iside req.body and set it again
//     },{new:true})
//     res.status(200).json(updatedUser)
// } catch (err) {
//     res.status(500).json(err)
// }
// })

router.put("/:id", verifyTokenAndAuthorization, async (req, res) => {
    if (req.body.password) {
      req.body.password = CryptoJS.AES.encrypt(
        req.body.password,
        process.env.PASS_SEC
      ).toString();
    }
  
    try {
      const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updatedUser);
    } catch (err) {
      res.status(500).json(err);
    }
  });


  //DELETE
  router.delete("/:id",verifyTokenAndAuthorization,async (req,res)=>{
    try {
        await User.findByIdAndDelete(req.params.id)
        res.status(200).json("user deleted")
    } catch (err) {
       res.status(500).json(err)
    }
  })

















module.exports = router;