const express = require("express");

const app = express();


app.get('/',(req,res)=>{
    res.send("App is ready");
})


app.get('/working',(req,res)=>{
    res.send("Cool its working");
})

app.get('/ready',(req,res)=>{
    res.send("It works");
})


app.listen(3000,()=>{
    console.log("App connected in 3000")
})