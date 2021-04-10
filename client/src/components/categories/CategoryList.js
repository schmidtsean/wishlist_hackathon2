import Category from "./Category";
import { Grid } from "semantic-ui-react";
import {Back} from '../styledComponents/categoryStyles';

const CategoryList = ({ categories, deleteCategory, updateCategory }) => {
  return (
    <Back>
      <Grid>
        <Grid.Row columns={3}>
          {categories.map((c) => (
            <Grid.Column>
              <Category
                key={c.id}
                {...c}
                deleteCategory={deleteCategory}
                updateCategory={updateCategory}
              />
              <br></br>
            </Grid.Column>
          ))}
        </Grid.Row>
      </Grid>
    </Back>
  );
};
export default CategoryList;