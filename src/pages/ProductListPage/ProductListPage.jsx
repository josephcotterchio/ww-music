import React from "react";
import "./ProductListPage.css";
import ProductList from "../../components/ProductList/ProductList";

function ProductListPage(props) {
  return (
    <>
      <h1>Product List</h1>
      <div className="ProductListPage-grid">
        {props.product.map((product) => (
          <ProductList
            product={product}
            handleDeleteProduct={props.handleDeleteProduct}
            key={product._id}
          />
        ))}
      </div>
    </>
  );
}

export default ProductListPage;
