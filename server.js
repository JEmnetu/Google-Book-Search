const express = require('express');
const app = new express();
const PORT = process.env.PORT || 3001;
const mongoose = require('mongoose');
const path = require('path');

var MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/Gbooks';



mongoose.connect(MONGODB_URI, ()=>{
    console.log('App is connected to MongoDB!');
})


app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, "./client/public/index.html"));
})


app.listen(PORT, ()=>{
    console.log(`App listening on Port: ${PORT}`);
});