import React, { Component } from "react";
import "./App.css";
import * as productAPI from "../../utils/products-api";
import ProductListPage from "../../pages/ProductListPage/ProductListPage";
import AddProductPage from "../../pages/AddProductPage/AddProductPage";
import ProductPage from "../../pages/ProductPage/ProductPage";
import EditProductPage from "../../pages/EditProductPage/EditProductPage";
import NavBar from "../../components/NavBar/NavBar";
import { Switch, Route } from "react-router-dom";
import SignUpPage from "../SignUpPage/SignUpPage";
import LoginPage from "../LoginPage/LoginPage";
import userService from "../../utils/userService";

class App extends Component {
  constructor() {
    super();
    this.state = {
      product: [],
      // Initialize user if there's a token, otherwise null
      user: userService.getUser()
    };
  }

  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  };

  handleSignUpOrLogin = () => {
    this.setState({ user: userService.getUser() });
  };

  handleAddProduct = async (newProductData) => {
    const newProduct = await productAPI.create(newProductData);
    this.setState(
      (state) => ({
        product: [...state.product, newProduct],
      }),
      () => this.props.history.push("/")
    );
  };

  handleUpdateProduct = async (updatedProductData) => {
    const updatedProduct = await productAPI.update(updatedProductData);
    // Using map to replace just the puppy that was updated
    const newProductArray = this.state.product.map((p) =>
      p._id === updatedProduct._id ? updatedProduct : p
    );
    this.setState(
      { product: newProductArray },
      // This cb function runs after state is updated
      () => this.props.history.push("/")
    );
  };

  handleDeleteProduct = async (id) => {
    console.log("delete")
    await productAPI.deleteOne(id);
    this.setState(
      (state) => ({
        // Yay, filter returns a NEW array
        product: state.product.filter((p) => p._id !== id),
      }),
      () => this.props.history.push("/")
    );
  };

  /*--- Lifecycle Methods ---*/

  async componentDidMount() {
    const product = await productAPI.getAll();
    this.setState({ product });
  }

  render() {
    return (
      <div className="App-header-footer">
        <NavBar user={this.state.user} handleLogout={this.handleLogout} />
        <header className="header">
          <h1>"I'm mixing weed with wine" -- The National</h1>
          <h2>The last app</h2>
          <br />
          <a
            className="App-link"
            href="https://www.google.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Search for products on Google
          </a>
        </header>
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <ProductListPage
                product={this.state.product}
                handleDeleteProduct={this.handleDeleteProduct}
              />
            )}
          />
          <Route
            exact
            path="/add"
            render={() => (
              <AddProductPage handleAddProduct={this.handleAddProduct} />
            )}
          />
          <Route
            exact
            path="/details"
            render={({ location }) => <ProductPage location={location} />}
          />
          <Route
            exact
            path="/signup"
            render={({ history }) => (
              <SignUpPage
                history={history}
                handleSignUpOrLogin={this.handleSignUpOrLogin}
              />
            )}
          />
          <Route
            exact
            path="/login"
            render={({ history }) => (
              <LoginPage
                history={history}
                handleSignUpOrLogin={this.handleSignUpOrLogin}
              />
            )}
          />
          <Route
            exact
            path="/edit"
            render={({ location }) => (
              <EditProductPage
                handleUpdateProduct={this.handleUpdateProduct}
                location={location}
              />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
