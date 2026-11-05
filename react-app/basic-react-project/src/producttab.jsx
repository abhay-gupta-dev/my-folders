import Product from "./product";
import Button from "./Button";

function ProductTab() {

  let styles = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
    padding: "30px"
  };

  return (
    <div className="product-tab" style={styles}>

      <Product
        title="Logistech MX Master"
        idx={0}
      />

      <Product
        title="Apple Pencil (2nd Gen)"
        idx={1}
      />

      <Product
        title="Zebronics Zeb-transformer"
        idx={2}
      />

      <Product
        title="Petronics Toad 23"
        idx={3}
      />

    </div>
  );
}

export default ProductTab;