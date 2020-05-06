import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Landing from './components/layout/Landing';
import SignUp from './components/auth/SignUp';
import SignIn from './components/auth/SignIn';
import Alert from './components/layout/Alert';
import CreateProfile from './components/profile-forms/CreateProfile';

import { Provider } from 'react-redux';
import store from './redux/store';
import { loadUser } from './redux/actions/authAction';
import setAuthToken from './utils/setAuthToken';

import './App.scss';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser(), []);
  });

  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Alert />
          <Switch>
            <Route exact path='/' component={Landing} />
            <Route exact path='/signup' component={SignUp} />
            <Route exact path='/signin' component={SignIn} />
            <Route exact path='/create-profile' component={CreateProfile} />
          </Switch>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
