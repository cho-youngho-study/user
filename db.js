import mongoose from "mongoose";

mongoose.connect('mongodb://localhost:27017/study', {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: true});

const db = mongoose.connection;

const handleOpen = () =>{
    console.log("connect DB");
}

const handleError = () =>{
    console.log("DB Error");
}

db.once("open", handleOpen);
db.on("error",handleError);