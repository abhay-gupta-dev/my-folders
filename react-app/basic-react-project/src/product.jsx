import Price from "./Price";
import "./product.css";
function Product({title,idx}) {
let oldPrices=["12,000","45,000","46000","12,000"];
let newPrices=["78,000","34,000","23000","9,000"];
let discription=[["90.8 DPI","67.00 mjh"],
["Intutive surface","governed with infinite"],
["designed for ipad pro","wireless","it is easy to handle"],
["designed for ipad pro","wireless","it is easy to handle"]

];
 return (
    <div className="product-card" >
     <h4>{title}</h4>
   <p>{discription[idx][0]}</p>
   <p>{discription[idx][1]}</p>
     <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]}/>

    
    </div>
  );
}

export default Product;