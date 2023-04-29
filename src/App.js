import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Articles from './pages/Articles';
import Projects from './pages/Projects';

function App() {
  return (
    <div className='app'>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route exact path="/#articles" component={ Articles } />
        <Route exact path="/#projects" component={ Projects } />
      </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
