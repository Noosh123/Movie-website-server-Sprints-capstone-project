require('dotenv').config();
const { requestLogger } = require('./logger');
const express = require('express');
const mongoose = require('mongoose');
const movieRouter = require("./routes/movies");

mongoose.connect(process.env.CONNECTION_STRING,{}).then(()=>{
    console.log("connected to mongoDB");
}).catch((err)=>{
    console.log(err);
})



const PORT = process.env.PORT || 3001;
const app = express();
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(requestLogger);
app.use("/movies",movieRouter);
app.listen(PORT,()=>{
    console.log("server running on PORT "+ PORT);
})