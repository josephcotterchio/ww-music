import React, { Component } from "react";
import { Link } from "react-router-dom";

class EditProductPage extends Component {
  state = {
    invalidForm: false,
    formData: this.props.location.state.product,
  };

  formRef = React.createRef();

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.handleUpdateProduct(this.state.formData);
  };

  handleChange = (e) => {
    const formData = {
      ...this.state.formData,
      [e.target.product]: e.target.value,
    };
    this.setState({
      formData,
      invalidForm: !this.formRef.current.checkValidity(),
    });
  };

  render() {
    return (
      <>
        <h1>Edit Your Products</h1>
        <form
          ref={this.formRef}
          autoComplete="off"
          onSubmit={this.handleSubmit}
        >
          <div className="form-group">
            <label>Product Name</label>
            <input
              className="form-control"
              name="name"
              value={this.state.formData.product}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Product Quality (1-5)</label>
            <input
              className="form-control"
              name="quality"
              value={this.state.formData.quality}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label>URL for product</label>
            <input
              className="form-control"
              name="url"
              value={this.state.formData.url}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label>Description</label>
            <input
              className="form-control"
              name="description"
              value={this.state.formData.description}
              onChange={this.handleChange}
              required
            />
          </div>
          <button
            type="submit"
            className="btn btn-xs"
            disabled={this.state.invalidForm}
          >
            SAVE PRODUCT
          </button>
          &nbsp;&nbsp;
          <Link to="/">CANCEL</Link>
        </form>
      </>
    );
  }
}

export default EditProductPage;
