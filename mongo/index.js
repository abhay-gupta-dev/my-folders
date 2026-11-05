const mongoose = require('mongoose');

main()
.then(()=>{
    console.log('connected to db');
})
.catch((err) => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');

  
}
const userSchema=new mongoose.Schema({
    name:String,
    email:String,
    age:Number
});

const User=mongoose.model('User',userSchema);
// const Employee=mongoose.model('Employee',userSchema);

// User.findByIdAndUpdate('69c27dac4fc861d7d4b5ebfa',{age:100},{new:true}).then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);

// })

User.findByIdAndDelete('69c3f08d4be4285de4e53739').then((res)=>{
    console.log(res);
})
.catch((err)=>{
    console.log(err);

});

// User.findById('69c27dac4fc861d7d4b5ebfa').then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// })

// const user1=new User({
//     name:'John Doe',
//     email:'johndoe@yahoo.in',
//     age:45
// });
// user1.save()

// const user2=new User({
//     name:'eve',
//     email:'eve@google.com',
//     age:30
// });
// user2
// .save()
// .then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// })
// User.insertMany([
//   { name: "Abhay", email: "abhay@gmail.com", age: 21 },
//   { name: "Riya", email: "riya@gmail.com", age: 20 },
//   { name: "Amit", email: "amit@gmail.com", age: 22 }
// ])
// .then(res => {
//   console.log("Inserted:", res);
// })
// .catch(err => {
//   console.log(err);
// });