const express = require('express');
const { default: Stripe } = require('stripe');
const router = require("express").Router();
const KEY = process.env.STRIPE_KEY
const stripe = require("stripe")(KEY);




router.post("/payment",(req,res)=>{
    stripe.charges.create(
        {
            source:req.body.tokenId,
            amount: req.body.amount,
            currency :"usd"
        },
        (stripeErr,striprRes)=>{
            if (stripeErr){
                res.status(500).json(stripeErr)
            }else{
                res.status(200).json(striprRes)
            }
        }
    )
})














module.exports = router;