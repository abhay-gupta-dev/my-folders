const express=require('express');
const app=express();
const port=8080;

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.get('/register',(req,res)=>{
    let {username ,password}=req.query;
    res.send(`Standard Get Request for Registration. with username : ${username} and password : ${password}`);
})


app.post('/register',(req,res)=>{
     let {username ,password,age}=req.body;
     console.log(req.body);
    
    res.send(`Standard Get Request for Registration. with username : ${username} ,password: ${password} and age: ${age}`);
})

app.listen(port,()=>{
    console.log('server is running on port' ,port);
});
