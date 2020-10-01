import React from "react";
import { Link } from "react-router-dom";
import "./ProductList.css";

function ProductList({ product, handleDeleteProduct }) {
  return (
    <div className="panel panel-default">
      <div className="panel-heading">
        <h3 className="panel-title">{product.product}</h3>
      </div>
      <div className="panel-footer ProductList-action-panel">
        <Link
          className="btn btn-xs"
          to={{
            pathname: "/details",
            state: { product },
          }}
        >
          DETAILS
        </Link>
        <Link
          className="btn btn-xs"
          to={{
            pathname: "/edit",
            state: { product },
          }}
        >
          EDIT
        </Link>
        <button
          className="btn btn-xs"
          onClick={() => handleDeleteProduct(product._id)}
        >
          DELETE
        </button>
      </div>
    </div>
  );
}

export default ProductList;
