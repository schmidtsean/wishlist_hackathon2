import { useState } from 'react';
import { Form } from 'semantic-ui-react';
import { CategoryConsumer } from '../../providers/CategoryProvider';
// import { Fillings, Kinds, Toppings, Sauces } from './TacoOpts';
const CategoryForm = ({ addCategory }) => {
  const [category, setcategory] = useState({ name: "" })

  const handleSubmit = (e) => {
    e.preventDefault()
    addCategory(category)
    setCategory({ name: "" })
  }
  return(
    <Form onSubmit={handleSubmit}>
      <Form.Select
        label='Name'
        name='name'
        value={category.name}
        onChange={(e, {value}) => setCategory({...category, name: value})}
        options={Names}
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