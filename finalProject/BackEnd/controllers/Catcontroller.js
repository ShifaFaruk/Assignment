const CatModel = require('../models/catModel')
const fs = require('fs');
const disp = async(req,res)=>{
    let catdata = await CatModel.find()
    return res.status(200).json({
        "catdata":catdata
    })
}
const addData = async(req,res)=>{
    const catname = req.body.catname
    const catid = req.body.catid
    
    console.log("add data func called...");
    console.log(catid);
    
    
    let ans
    if(catid!=undefined){
        //update
        console.log('if part');
        
        ans = await CatModel.findByIdAndUpdate(catid,{catname})
        
     } else {
        console.log('else part');

        ans = await CatModel.create({catname})  
    }
   if(ans){
    return res.json({
        "msg":"Data add/update successfully..."
    })
   }
}

const delData = async(req,res)=>{
    let id = req.params.id
    let userdata = await CatModel.findByIdAndDelete(id)
    return res.json({
        "msg":"Data delete successfully..."
    })
}
const editData = async(req,res)=>{
    let id = req.params.id
    let editcatdata = await CatModel.findById(id)
    return res.json({
        "data":editcatdata
    })
}
module.exports = {disp,addData,delData,editData} 