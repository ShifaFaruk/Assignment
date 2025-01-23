//REPL read evaluate print loop
//
//There are three types of module
//1 Core module
//2 Local Module
//3 third party module

//http is core module of node js
//to tranfer data http is used


//Core module


const http = require('http')
http.createServer((req,res)=>{
res.write('Helloo')
res.end('end')
}).listen(5000,()=>{
    console.log('running 5000 port')
})