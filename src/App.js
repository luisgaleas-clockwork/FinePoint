//=============================|
// Packages                    |
//=============================|
import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

//=============================|
// Compnents Pages             |
//=============================|
import Landing from './Pages/Landing'

//=============================|
// Styles                      |
//=============================|
import './Components/main.scss'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Landing} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
