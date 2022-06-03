import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';

// Import pages
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <h1>My Articles</h1>
        </nav>

        <Route path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About/>
        </Route>
        <Route path="/contact">
          <Contact/>
        </Route>

      </BrowserRouter>
    </div>
  );
}

export default App
