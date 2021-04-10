import { useState } from 'react';
import { Form } from 'semantic-ui-react';
import { CategoryConsumer } from '../../providers/CategoryProvider';
// import { Fillings, Kinds, Toppings, Sauces } from './TacoOpts';
const CategoryForm = ({ addCategory }) => {
  const [category, setCategory] = useState({ genre: "" })

  const handleSubmit = (e) => {
    e.preventDefault()
    addCategory(category)
    setCategory({ genre: "" })
  }
  return(
    <Form onSubmit={handleSubmit}>
      <Form.Input
        label='Genre'
        name='genre'
        value={category.genre}
        onChange={(e, {value}) => setCategory({...category, genre: value})}
        placeholder = 'genre'
        required
      />
      
      <Form.Button>Save</Form.Button>
    </Form>
  )
}

const ConnectedCategoryForm = (props) => (
  <CategoryConsumer>
    { value => (
      <CategoryForm {...props} {...value} />
    )}
  </CategoryConsumer>
)

export default ConnectedCategoryForm;