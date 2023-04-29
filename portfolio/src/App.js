import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Articles from './pages/Articles';
import Projects from './pages/Projects';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route exact path="/contact" component={ Contact } />
        <Route exact path="/about" component={ About } />
        <Route exact path="/articles" component={ Articles } />
        <Route exact path="/projects" component={ Projects } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
