var express = require('express')
var app = express()
const CatRoutes = require('./routes/CatRoutes')
const cors = require('cors')
app.get('/',(req,res)=>{
    res.end("Hii")
})
app.use(cors({ origin: '*' }));
app.use(express.urlencoded({extended:false}))
app.use('/api',CatRoutes)
app.listen(5000,()=>{
    console.log("Listening on 5000 port");    
})
