const express = require('express');
const app = new express();
const PORT = process.env.PORT || 3001;
const mongoose = require('mongoose');
const path = require('path');

var MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/Gbooks';



mongoose.connect(MONGODB_URI, ()=>{
    console.log('App is connected to MongoDB!');
})

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}





app.listen(PORT, ()=>{
    console.log(`App listening on Port: ${PORT}`);
});