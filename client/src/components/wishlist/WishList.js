import { Component } from "react";
import axios from "axios";
import WishlistForm from "./WishlistForm";
import { Button, Icon } from "semantic-ui-react";


class Wishlist extends Component {
  state = { wishlist: [] };
  componentDidMount() {
    axios
      .get("/api/wishlists")
      .then((res) => {
        this.setState({ wishlist: res.data });
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
    const { id, name, discription, deleteWishlist } = this.props;
    return (
      <>
        <h5>Name: {name}</h5>
        <h5>Body: {discription}</h5>
        
        <br></br>
          
        <div>
          <Button
            color="red"
            size="mini"
            onClick={() => deleteWishlist(id)}> <Icon name="trash"></Icon>
            Delete Wishlist
          </Button>
          {editing ? (
            <WishlistForm {...this.props} toggleForm={this.toggleForm} /> 
          ) : (
              <Button 
                size="mini"
                onClick={() => this.toggleForm()}><Icon name="edit"></Icon>
              Edit Wishlist
            </Button>
          )}
        </div>
        <br />
      </>
    );
  }
}
export default Wishlist;