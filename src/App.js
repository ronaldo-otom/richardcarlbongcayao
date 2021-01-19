import './App.css';
import Index from './components';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import PhotographyCompnent from './components/photography/photographyCompnent';
import NavbarLayout from './components/layout/navbar/navbar';

function App() {
  return (
    <div>      
      <Router>
          <NavbarLayout />
          <Route exact path='/' component={Index} />
          <Route path='/photography' component={PhotographyCompnent} />
      </Router>
    </div>
  );
}

export default App;
