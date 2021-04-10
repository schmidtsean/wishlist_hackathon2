import { AuthConsumer } from '../../providers/AuthProvider';
import { Menu } from 'semantic-ui-react';
import { Link, withRouter } from 'react-router-dom';
const Navbar = ({ location, user, handleLogout, history }) => {
  const rightNavItem = () => {
    if (user) {
      return (
        <>
          <Menu pointing secondary>
            <Link to='/home'>
              <Menu.Item
                name='home'
                id='home'
                active={location.pathname === '/home'}
              />
            </Link>
          </Menu>
          <Menu.Menu position='right'>
            <Menu.Item
              name='logout'
              onClick={() => handleLogout(history)}
            />
          </Menu.Menu>
        </>
      )
    } else {
      return (
        <Menu.Menu position='right'>
          <Link to='/login'>
            <Menu.Item
              name='login'
              id='login'
              active={location.pathname === '/login'}
            />
          </Link>
          <Link to='/register'>
            <Menu.Item
              name='register'
              id='register'
              active={location.pathname === '/register'}
            />
          </Link>
        </Menu.Menu>
      )
    }
  }
  return(
    <>
      <Menu pointing secondary>
      <Link to='/category'>
              <Menu.Item
                name='category'
                id='category'
                active={location.pathname === '/category'}
              />
            </Link>
            <Link to='/items'>
              <Menu.Item
                name='items'
                id='items'
                active={location.pathname === '/items'}
              />
            </Link>
            <Link to='/wishlist'>
              <Menu.Item
                name='Wishlist'
                id='wishlist'
                active={location.pathname === '/wishlist'}
              />
            </Link>
        { rightNavItem() }
      </Menu>
    </>
  )




  
}
const ConnectedNavbar = (props) => (
  <AuthConsumer>
    { auth =>
      <Navbar {...props} {...auth} />
    }
  </AuthConsumer>
)
export default withRouter(ConnectedNavbar);