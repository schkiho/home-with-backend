import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Landing from './components/layout/Landing';
import SignUp from './components/auth/SignUp';
import Alert from './components/layout/Alert';

import './App.scss';

function App() {
  return (
    <Router>
      <Fragment>
        <Alert />
        <Switch>
          <Route exact path='/' component={Landing} />
          <Route exact path='/signup' component={SignUp} />
        </Switch>
      </Fragment>
    </Router>
  );
}

export default App;
