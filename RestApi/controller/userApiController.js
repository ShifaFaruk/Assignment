const UserModel = require('../model/userModel')
const fs = require('fs');
const disp = async(req,res)=>{
    let userdata = await UserModel.find().populate('roles')
    return res.status(200).json({
        "userdata":userdata
    })
}
const addData = async(req,res)=>{
    const username = req.body.username
    const roleid = req.body.roles
    const userid = req.body.userid
    
    let ans
    if(userid!=''){
        //update
    ans = await UserModel.findByIdAndUpdate(userid,{username,"roles":roleid})
        
     } else {e
        ans = await UserModel.create({username,"roles":roleid})  
    }
   if(ans){
    return res.json({
        "msg":"Data add/update successfully..."
    })
   }
}