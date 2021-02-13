import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink,
} from 'react-router-dom';
// pages imported
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Blog from './pages/Blog';

const App = () => {
  return (
    <div>
      <Router>
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
          <Route exact path='/' component={Home}>
            <Home />
          </Route>
          <Route exact path='/about' component={About}>
            <About />
          </Route>
          <Route exact path='/contact' component={Contact}>
            <Contact />
          </Route>
          <Route exact path='/blog' component={Blog}>
            <Blog />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
