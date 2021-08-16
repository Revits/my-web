import './App.css';
import Navigation from './components/Navigation';
import Home from './components/pages/Home';
import Photos from './components/pages/Photos';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
   <> 

   <Router>
     <Navigation />
     <Switch>
       <Route path='/' exact component={Home} />
       <Route path='/Photos' exact component={Photos} />
     </Switch>
   </Router>
   </>
  );
}

export default App;
