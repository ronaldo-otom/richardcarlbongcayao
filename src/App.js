import Index from './components';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import React from 'react';

function App() {
  const [location, setLocation] = React.useState(false);
  React.useEffect(() => {
    if(window.location.pathname !== '/') {
      setLocation(true)
    }
  }, [location])
  return (
    <div>      
      <Router>
          <Route exact path='/' component={Index} />
      </Router>
    </div>
  );
}

export default App;
