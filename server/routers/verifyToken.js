const jwt =require('jsonwebtoken');


const verifyToken = (req,res,next)=>{
  const authHeader = req.headers.token;
  if (authHeader){
      // if were using bearer we need to split  the token
      const token = authHeader.split(" ")[1]
   jwt.verify(token,process.env.JWT_SEC,(err,user)=>{
       if(err)res.status(403).json("not a valid token ")
       //assign user to the req
        req.user=user;
        next();
      
   })
  }else{
      return res.status(401).json("your not authentication")
  }
}
const verifyTokenAndAuthorization = (req, res, next) => {
    verifyToken(req, res, () => {
      if (req.user.id === req.params.id || req.user.isAdmin) {
        next();
      } else {
        res.status(403).json("You are not alowed to do that!");
      }
    });
  };
  const verifyTokenAndAdmin = (req, res, next) => {
    verifyToken(req, res, () => {
      if ( req.user.isAdmin) {
        next();
      } else {
        res.status(403).json("You are not alowed to do that!");
      }
    });
  };  






module.exports ={verifyToken,verifyTokenAndAuthorization,verifyTokenAndAdmin}