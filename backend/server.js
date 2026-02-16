const dotenv=require("dotenv")
const express=require("express")
const cors=require("cors")
require('./config/db')

const app=express()

app.use(cors());
app.use(express.json());


const Port=process.env.PORT || 5000
app.listen(Port,()=>console.log(`server is running on port ${Port}`))
