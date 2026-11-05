let btn1 = document.querySelector(".btn1");
let input=document.querySelector(".input1");
console.log(btn1);

btn1.onmouseenter=function(){
    console.log("you are on the btn")
  }

btn1.addEventListener("click", function () {
  console.log("Button Clicked");
  let input=document.querySelector(".input1");
  console.log(input.value);
  
  
  let ul=document.querySelector("ul");
  let li=document.createElement("li");
  li.classList.add("list-group-item");
  li.innerText=input.value;
  ul.appendChild(li);
  input.value='';
});
input.addEventListener("keydown",(e)=>{
    if(e.key=="Enter"){
        btn1.click();
    }
})
