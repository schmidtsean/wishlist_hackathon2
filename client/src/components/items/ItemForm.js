import { useState } from 'react';
import { Form } from 'semantic-ui-react';
import { ItemConsumer } from '../../providers/ItemProvider';

const ItemForm = ({ addItem }) => {
  const [item, setItem] = useState({ name: "", description: "", user_id: ""})

  const handleSubmit = (e) => {
    e.preventDefault()
    addItem(item)
    setItem({ name: "", description: "", user_id: ""})
  }
  return(
    <Form onSubmit={handleSubmit}>
      <Form.Input
        label='Name'
        name='name'
        value={item.name}
        onChange={(e, {value}) => setItem({...item, name: value})}
        required
        />
        <Form.Input
        label='Price'
        name='price'
        value={item.price}
        onChange={(e, {value}) => setItem({...item, price: value})}
        required
        />
    <Form.Button>Save</Form.Button>
    </Form>
  )
}

const ConnectedItemForm = (props) => (
  <ItemConsumer>
    { value => (
      <ItemForm {...props} {...value} />
    )}
  </ItemConsumer>
)

export default ConnectedItemForm;
