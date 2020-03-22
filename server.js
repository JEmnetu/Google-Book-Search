const express = require('express');
const app = new express();
const PORT = process.env.PORT || 3131;
const mongoose = require('mongoose');

var MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/Gbooks';

mongoose.connect(MONGODB_URI, ()=>{
    console.log('App is connected to MongoDB!');
})




app.listen(PORT, ()=>{
    console.log(`App listening on Port: ${PORT}`);
})

app.get('/', (req, res)=>{
    res.send("Google Book Page");
})