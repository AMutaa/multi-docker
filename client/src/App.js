import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import OtherPage from './OtherPage';
import Fib from './Fib'

function App() {
  return (
    <Router>
      <div className="App">
          <h1 className="App-title">Fib Calculator</h1>
          <Link to ="/">Home</Link>
          <Link to ="/otherpage">Other Page</Link>
      <div>
        <Route exact path = "/" component={Fib} />
        <Route exact path = "/otherpage" component={OtherPage} />
      </div>
    </div>
    </Router>
  );
}

export default App;
