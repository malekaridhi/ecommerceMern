const express = require('express')
const router = require("express").Router();
const Cart = require("../models/Cart")
const {
    verifyToken,
    verifyTokenAndAuthorization,
    verifyTokenAndAdmin
} =require('./verifyToken')

//CREATE
router.post("/",verifyToken,async(req,res)=>{
    const newCart = new Cart (req.body)
    try {
        const savedCart = await newCart.save();
        res.status(200).json(savedCart)
    } catch (err) {
        res.status(500).json(err);  
    }
    })
    //PUT
    router.put("/:id", verifyTokenAndAuthorization, async (req, res) => {
     
        try {
          const updatedCart= await Cart.findByIdAndUpdate(
            req.params.id,
            {
              $set: req.body,
            },
            { new: true }
          );
          res.status(200).json(updatedCart);
        } catch (err) {
          res.status(500).json(err);
        }
      });
    
    
      //DELETE
      router.delete("/:id",verifyTokenAndAuthorization,async (req,res)=>{
        try {
            await Cart.findByIdAndDelete(req.params.id)
            res.status(200).json("Cart deleted")
        } catch (err) {
           res.status(500).json(err)
        }
      })
    // //GET USER CART
    router.get("/find/:userId",verifyTokenAndAuthorization,async (req,res)=>{
        try {
            const cart = await Cart.findOne({userId:req.params.userId})
            
             res.status(200).json(cart);
        } catch (err) {
           res.status(500).json(err)
        }
      })
//     // // GET ALL PRODUCT
    
//     router.get("/",async (req,res)=>{
//         const qNew = req.query.new;
//         const qCategory = req.query.category
//         try {
//             let products;
//             if(qNew){
//                 products = await Product.find().sort({createdAt: -1}).limit(5)
//             } else if (qCategory){
//                 products = Product.find({
//                     categories: {
//                         $in:[qCategory]
//                     }
//                 })
//             }else {
//                 products = await Product.find()
//             }
//              res.status(200).json(products);
//         } catch (err) {
//            res.status(500).json(err)
//         }
//       })
    
    
    
    
    
    
    

















module.exports = router;