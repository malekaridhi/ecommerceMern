const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const userRoutes = require('./routers/user')
const cartRoutes = require('./routers/cart')
const orderRoutes = require('./routers/order')
const productRoutes = require('./routers/product')
const authRoutes = require('./routers/auth')
const stripeRoutes = require('./routers/stripe')



require("dotenv").config();
const app = express()
const http = require("http").createServer(app);
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
;
require('dotenv').config();
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
app.use('/api/user', userRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/product', productRoutes);
app.use('/api/cart', cartRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/checkout', stripeRoutes);
  
mongoose.connect(
    process.env.MONGODB_CONNECTION_STRING,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    //   useCreateIndex: true,
    },
    (err) => {
      if (err) throw err;
      console.log("MONGO DB is connected on port : 8000");
    }
  );













  const PORT = process.env.PORT || 8000;
http.listen(PORT, () => console.log(`server is running on port : ${PORT}`));