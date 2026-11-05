const express=require('express');
const app=express();
const port=8080;
const path=require('path');
const{v4:uuidv4}=require('uuid');
const methodOverride = require("method-override");


 

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.static(path.join(__dirname,'public')));
app.use(express.urlencoded({extended:true}));
app.use(methodOverride("_method"));
app.use(express.json());

let posts=[
    {
        id:uuidv4(),
        username:'bob',
        content:'hello in this world of ejs template engine in express js framework and node js environment and its really fun to learn it provides lot of features to develop web applications easily and quickly'
    },
    {
        id:uuidv4(),
        username:'alice',
        content:'hi everyone this is alice and i am learning ejs template engine along with express js framework in node js environment its really very interesting to learn and implement'
    },
    {
        id:uuidv4(),
        username:'charlie',
        content:'good day to all this is charlie here i am exploring ejs template engine with express js in node js its really a great experience working with these technologies'
    },
    {
        id:uuidv4(),
        username:'david',
        content:'hey folks this is david i am enjoying learning ejs template engine along with express js framework in node js environment its really awesome to work with these technologies'
    },
    {
        id:uuidv4(),
        username:'eva',
        content:'hello friends this is eva here i am having a great time learning ejs template engine with express js framework in node js environment its really fun and exciting to work with these technologies'
    }
    

    
]

app.get("/posts/search", (req, res) => {
  const { username } = req.query;

  // If search box is empty → show all posts
  if (!username) {
    return res.render("index", { posts });
  }

  // Filter posts by username (case-insensitive)
  const filteredPosts = posts.filter(p =>
    p.username.toLowerCase().includes(username.toLowerCase())
  );

  res.render("index", { posts: filteredPosts });
});

  


app.get('/posts',(req,res)=>{
    res.render('index.ejs',{posts});
})
app.get('/posts/new',(req,res)=>{
    res.render('new.ejs',{posts});
})
app.get("/login", (req, res) => {
  res.render("login.ejs");
});
app.get("/setpassword", (req, res) => {
  res.render("setpassword.ejs");

});
app.get("/register", (req, res) => {
  res.render("register.ejs");

});
app.get("/posts/:id",(req,res)=>{
    let { id }=req.params;
    
    let post=posts.find((p)=>{
        return p.id===id});
    res.render("show.ejs",{post});
})

app.get("/posts/:id/edit",(req,res)=>{
    let { id }=req.params;
    let post=posts.find(p=>p.id===id);
    res.render('edit.ejs',{post})
})
app.patch("/posts/:id", (req, res) => {
  let { id }=req.params;
  let newcontent=req.body.content;
  
  let post=posts.find(p=>p.id===id);
  post.content=newcontent;
  console.log(post);
  
  res.redirect('/posts')

});
app.delete("/posts/:id",(req,res)=>{
    let { id }=req.params;
     posts=posts.filter(p=>p.id !==id);
    res.redirect("/posts");
    
})
let users=[];


  app.post("/setpassword", (req, res) => {
  let { email, newpassword } = req.body;

  let user = users.find(u => u.email === email);

  if (!user) {
    return res.redirect("/register");
  }

  user.password = newpassword;
  res.redirect("/posts");
});



app.post("/register", (req, res) => {
  let { email,password,name,surname } = req.body;
  

  if (users.find(u => u.email === email)) {
  return res.send("User already exists");
}
users.push({email,password,name,surname});
  

  console.log("New User:", {email,password,name,surname});
  console.log("new user added");
  console.log(req.body);

  res.redirect("/posts");
});

app.post("/login", (req, res) => {
  let { email, password } = req.body;

  let user = users.find(
    u => u.email === email && u.password === password
  );
if (!user) {
  return res.send("Invalid email or password");
}

  
 
    res.redirect("/posts");
  

  
});
app.post('/posts',(req,res)=>{
    const {username,content}=req.body;
    let id=uuidv4();
    posts.unshift({id,username,content});

    res.redirect('/posts');
})

app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
})