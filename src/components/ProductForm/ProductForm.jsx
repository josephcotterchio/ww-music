import React from "react";
import { Link } from "react-router-dom";

function ProductForm({ product }) {
  return (
    <div className="panel panel-default">
      <div className="panel-heading">
        <h3 className="panel-title">{product.product}</h3>
      </div>
      <div className="panel-body">
        <dl>
          <dt>Quality</dt>
          <dd>{product.quality}</dd>
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

