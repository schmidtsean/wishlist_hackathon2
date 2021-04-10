import { Component } from "react";
import { Button, Form } from "semantic-ui-react";


class WishlistForm extends Component {
  state = { name: "", description: ""};

  componentDidMount() {
    if (this.props.id) {
      const { id, name, description } = this.props;
      this.setState({ id, name, description });
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.props.id) {
      const { updateWishlist, id, toggleForm } = this.props;
      updateWishlist(id, this.state);
      toggleForm();
    } else {
      this.props.addWishlist(this.state);
    }
    this.setState({ name: "", description: "" });
  };
  render() {
    const { name, description } = this.state;
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Input
          type="text"
          name="name"
          value={name}
          onChange={this.handleChange}
          required
          placeholder="Name"
        />
        <Form.TextArea
          type="text"
          name="body"
          value={description}
          onChange={this.handleChange}
          required
          placeholder="Text"
        />
        
        <Button type="submit">Submit</Button>
      </Form>
    );
  }
}
export default WishlistForm;
