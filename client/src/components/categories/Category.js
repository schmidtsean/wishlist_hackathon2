import { Component } from "react";
import CategoryForm from "../categories/CategoryForm";
import { Card, Icon, Button, Image } from "semantic-ui-react";
import { Spacing } from '../styledComponents/categoryStyles';
import { Link } from "react-router-dom";
import Categories from "./Categories";
import Wishlists from "../wishlist/Wishlists";
import axios from "axios";

class Category extends Component {
  state = { category: [] };
  componentDidMount() {
    axios
      .get("/api/categories")
      .then((res) => {
        this.setState({ category: res.data });
      })
      .catch((err) => console.log(err));
  }

  state = { editing: false };
  toggleForm = () => {
    const { editing } = this.state;
    this.setState({ editing: !editing });
  };

  render() {
    const { editing } = this.state;
    const { id, genre, img, deleteCategory } = this.props;
    return (
      <>
      <Spacing>
        <Card>
          <Card.Content>
            <Card.Header>
            
                {genre}
               
            </Card.Header>
            <Card.Meta>Genre: {genre}</Card.Meta>
            <Card.Description><Image src={img} /></Card.Description>
            <br></br>
            <Button size="mini" color="red" onClick={() => deleteCategory(id)}><Icon name="trash"></Icon>Delete</Button>
            {editing ? (
              <CategoryForm {...this.props} toggleForm={this.toggleForm} />
            ) : (
              <Button size="mini" onClick={() => this.toggleForm()}><Icon name="edit"></Icon>Edit</Button>
            )}
            <br />
            
            {/* <Wishlists itemId={id} /> */}
          </Card.Content>
        </Card>
      </Spacing>
      </>
    );
  }
}
export default Category;

