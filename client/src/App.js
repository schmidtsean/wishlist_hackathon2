import { Switch, Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import Navbar from './components/shared/Navbar';
import NoMatch from './components/shared/NoMatch';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import ProtectedRoute from './components/auth/ProtectedRoute';
import Home from './components/shared/Home';
import Category from './components/categories/Categories';
import Item from './components/items/Items';
import Wishlist from './components/wishlist/Wishlist';
import FetchUser from './components/auth/FetchUser';
const App = () => (
  <>
    <Navbar />
    <FetchUser>
    <Container>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <ProtectedRoute exact path="/category" component={Category} />
        <ProtectedRoute exact path="/items" component={Item} />
        <ProtectedRoute exact path="/wishlist" component={Wishlist} />  
        <Route exact path="/categories/:id" component={Category} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/register' component={Register} />
        <Route component={NoMatch} />
      </Switch>
    </Container>
    </FetchUser>
  </>
)
export default App;
