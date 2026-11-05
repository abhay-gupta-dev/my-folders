const mongoose = require('mongoose');

main()
.then(()=>{
    console.log('connected to db');
})
.catch((err) => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/amazon');

  
}
const bookSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true,
        minlength:3,
        maxlength:100
    },
    Author:{
        type:String,
    },
    price:{
        type:Number,
        min:[1,'price must be greater than 0'],

    },
    discount:{
        type:Number,
        default:"10"
    },
    genre:[String]
});
const Book=mongoose.model('Book',bookSchema);

// Book.insertMany([
//     {
//         title: "Rich Dad Poor Dad",
//         Author: "Robert Kiyosaki",
//         price: 350,
//         discount: 10,
//         genre: ["Finance", "Self-help"]
//     },
//     {
//         title: "The Alchemist",
//         Author: "Paulo Coelho",
//         price: 299,
//         genre: ["Fiction", "Adventure"]
//     },
//     {
//         title: "Clean Code",
//         Author: "Robert C. Martin",
//         price: 650,
//         discount: 20,
//         genre: ["Programming", "Software"]
//     }
// ]);

Book.findByIdAndUpdate('69c64827205b760fbf5be292',{price:-400},{new:true,runValidators:true}).then((res)=>{
    console.log(res);
})
.catch((err)=>{
    console.log(err.errors.price.properties.message);

});
// let book3=new Book({
//     title:'ramu ki story',
//     Author:'ramu',
    
// });
// book3.save()
// .then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// });

// let book4=new Book({
//     title:'To Kill a Mockingbird',
//     Author:'Harper Lee',
//     price:"500"
// });
// book4.save()
// .then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// });     
