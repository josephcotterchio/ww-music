import React from "react";
import ProductForm from "../../components/ProductForm/ProductForm";

function ProductPage(props) {
  const product = props.location.state.product;
  return (
    <>
      <h1>Products</h1>
      <ProductForm class="faves" key={product._id} product={product} />
    </>
  );
}

export default ProductPage;
