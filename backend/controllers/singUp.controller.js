const db = require('../config/db')
const bcrypt = require('bcrypt')

exports.singUp = async(req,res)=>{
    const {name,email,password}=req.body;
    const hashed=await bcrypt.hash(password,8);
    // console.log(hashed);


    const sql="INSERT INTO users(name,email,password) VALUES(?,?,?)"
    db.query(sql,[name,email,hashed],(err)=>{
        if(err) res.status(500).json(err);
        
        res.json({message:"user created successfully"})
    })
}