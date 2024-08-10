const express =require("express")
const app=express()

app.get("/",(req,res)=>{
     res.send("Subham Bohara")
     req.send("hello world")
})



app.listen(3000,()=>{
     console.log("Nodejs project has started")
})


