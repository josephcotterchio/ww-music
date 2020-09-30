import React, { Component } from "react";

class AddProductPage extends Component {
  state = {
    invalidForm: true,
    formData: {
      product: "",
      quality: "",
      url: "",
      description: "",
    },
  };

  formRef = React.createRef();

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.handleAddProduct(this.state.formData);
  };

  handleChange = (e) => {
    const formData = {
      ...this.state.formData,
      [e.target.name]: e.target.value,
    };
    this.setState({
      formData,
      invalidForm: !this.formRef.current.checkValidity(),
    });
  };

  render() {
    return (
      <>
        <h1>Add Product</h1>
        <form
          ref={this.formRef}
          autoComplete="off"
          onSubmit={this.handleSubmit}
        >
          <div className="form-group">
            <label>Product</label>
            <input
              className="form-control"
              name="product"
              value={this.state.formData.product}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Quality</label>
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
            className="btn"
            disabled={this.state.invalidForm}
          >
            ADD PRODUCT
          </button>
        </form>
      </>
    );
  }
}

export default AddProductPage;
