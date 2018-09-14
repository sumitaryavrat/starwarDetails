import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './Home';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
ReactDOM.render( <Router>

      <Route exact path="/" component={Home} />
     
    </Router>, document.getElementById('root'));
registerServiceWorker();
