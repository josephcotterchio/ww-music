import React from "react";
import { Link } from "react-router-dom";
import "./ProductForm.module.css";

function ProductForm({ product }) {
  return (
    <div className="panel panel-default">
      <div className="panel-heading">
        <h3 className="panel-title">{product.product}</h3>
      </div>
      <div className="panel-body">
        <dl>
          <dt>Quality (1-5)</dt>
          <dd>{product.quality}</dd>
          <dt>Hyperlink to product</dt>
          <dd>
            <a href={product.url} target="_blank" rel="noopener noreferrer">Your hyperlink</a></dd>
          <dt>Description</dt>
          <dd>{product.description}</dd>
        </dl>
      </div>
      <div className="panel-footer">
        <Link to="/">RETURN TO LIST</Link>
      </div>
    </div>
  );
}

export default ProductForm;

