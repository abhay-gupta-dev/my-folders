export default function Price({oldPrice,newPrice}){
    let styles={
        backgroundColor:"#e0c367",
        height:"20px"

    }
    return(
        <div style={styles}>
            <span style={{textDecorationLine :"line-through"}}>₹{oldPrice}</span>
            &nbsp;&nbsp;
            <span style={{fontWeight:"bold"}}>₹{newPrice}</span>
        </div>

    );
        


    
    
}