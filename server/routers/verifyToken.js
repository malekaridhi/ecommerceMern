const jwt =require('jsonwebtoken');
const { model } = require('mongoose');



const verifyToken = (req,res,next)=>{
    const authHeader = req.headers.token;
    if (authHeader){
     jwt.verify(token,process.env.JWT_SEC,(err,user)=>{
         if(err){res.status(403).json("not a valid token ")
          req.user=user;
          next();
        }
     })
    }else{
        return res.status(401),json("your not authentication")
    }
}
module.exports ={verifyToken}