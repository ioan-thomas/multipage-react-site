import './App.css';
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom';

// Import pages
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Article from './pages/article';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <h1>My Articles</h1>
          <NavLink exact to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About/>
          </Route>
          <Route path="/contact">
            <Contact/>
          </Route>
          <Route path="/articles/:id">
            <Article/>
          </Route>
        </Switch>

      </BrowserRouter>
    </div>
  );
}

export default App
