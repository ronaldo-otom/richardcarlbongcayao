import Index from './components';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import BookComponent from './components/book/book';
import NavbarLayout from './components/layout/navbar/navbar';
import GalleryComponent from './components/gallery/galleryComponent';
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
          <Route path='/gallery' component={GalleryComponent} />
      </Router>
    </div>
  );
}

export default App;
