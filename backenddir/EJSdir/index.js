const express=require('express');
const app=express();
const path=require('path');

const port=8080;
app.use(express.static(path.join(__dirname,'/public')));
app.use(express.static(path.join(__dirname,'/public/js')));
app.use((req,res,next)=>{
    console.log('request is coming from browser');
    next();
});

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'/views'));

app.get('/',(req,res)=>{


    res.render('home.ejs');
})
app.get('/about',(req,res)=>{
    res.send('this is my ejs');
});
app.get('/rolldice',(req,res)=>{
    let diceval=Math.floor(Math.random()*6)+1;
    res.render('rolldice.ejs',{diceval});
})
app.get('/ig/:username',(req,res)=>{
    const instadata=require('./data.json');

    
    let {username}=req.params;
    let data=instadata[username];
    
    if(data){
        res.render('instagram.ejs' ,{data});

    }else{
        res.render('errors.ejs');
    }


})

app.listen(port,()=>{
    console.log(`server is running at port ${port}`);
})
