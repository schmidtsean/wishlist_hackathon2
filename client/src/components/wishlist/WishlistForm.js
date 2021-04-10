import { useState } from 'react';
import { Form } from 'semantic-ui-react';
import { WishlistConsumer } from '../../providers/WishlistProvider';


const WishlistForm = ({ addWishlist }) => {
  const [wishlist, setWishlist] = useState({ name: "", description: "", user_id: ""})

  const handleSubmit = (e) => {
    e.preventDefault()
    addWishlist(wishlist)
    setWishlist({ name: "", description: "", user_id: ""})
  }
  return(
    <Form onSubmit={handleSubmit}>
      <Form.Input
        label='Name'
        name='name'
        value={wishlist.name}
        onChange={(e, {value}) => setWishlist({...wishlist, name: value})}
        required
        />
        <Form.Input
        label='Description'
        name='description'
        value={wishlist.description}
        onChange={(e, {value}) => setWishlist({...wishlist, description: value})}
        required
        />
    <Form.Button>Save</Form.Button>
    </Form>
  )
}

const ConnectedWishlistForm = (props) => (
  <WishlistConsumer>
    { value => (
      <WishlistForm {...props} {...value} />
    )}
  </WishlistConsumer>
)

export default ConnectedWishlistForm;
