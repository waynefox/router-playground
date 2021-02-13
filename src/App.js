import { Route, Switch, NavLink } from 'react-router-dom';
// pages imported
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Blog from './pages/Blog';

const App = () => {
  return (
    <div>
      <nav className='nav'>
        <NavLink activeClassName='active-link' exact to='/'>
          Home
        </NavLink>
        <NavLink activeClassName='active-link' exact to='/about'>
          About
        </NavLink>
        <NavLink activeClassName='active-link' exact to='/contact'>
          Contact
        </NavLink>
        <NavLink activeClassName='active-link' exact to='/blog'>
          Blog
        </NavLink>
      </nav>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/about'>
          <About />
        </Route>
        <Route exact path='/contact'>
          <Contact />
        </Route>
        <Route exact path='/blog'>
          <Blog />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
