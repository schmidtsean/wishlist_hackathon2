import { Component } from "react";
import axios from "axios";
import CategoryList from "./CategoryList";
import CategoryForm from "./CategoryForm";
import {H1} from "../styledComponents/categoryStyles";

class Categories extends Component {
  state = { categories: [] };
  componentDidMount() {
    axios
      .get("/api/categories")
      .then((res) => {
        this.setState({ categories: res.data });
      })
      .catch((err) => console.log(err));
  }
  addCategory = (category) => {
    axios
      .post("/api/categories", { category })
      .then((res) => {
        const { categories } = this.state;
        this.setState({ categories: [...categories, res.data] });
      })
      .catch((err) => console.log(err));
  };
  updateCategory = (id, category) => {
    axios
      .put(`/api/categories/${id}`, { category })
      .then((res) => {
        const categories = this.state.categories.map((c) => {
          if (c.id === id) {
            return res.data;
          }
          return c;
        });
        this.setState({ categories });
      })
      .catch((err) => console.log(err));
  };
  deleteCategory = (id) => {
    axios
      .delete(`/api/categories/${id}`)
      .then((res) => {
        const { categories } = this.state;
        this.setState({ categories: categories.filter((c) => c.id !== id) });
      })
      .catch((err) => console.log(err));
  };
  render() {
    const { categories } = this.state;
    return (
      <>
        <H1>Categories</H1>
        <h2>Add a Category</h2>
        
        <CategoryForm addCategory={this.addCategory} />
       
        <br></br>
    
        <CategoryList
          categories={categories}
          deleteCategory={this.deleteCategory}
          updateCategory={this.updateCategory}
        />
      </>
    );
  }
}
export default Categories;