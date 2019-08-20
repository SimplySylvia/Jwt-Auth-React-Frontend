import React from 'react';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';
import Home from '../components/Home/Home';
import Login from '../components/Auth/Login';
import Register from '../components/Auth/Register';
import ProfileContainer from '../containers/ProfileContainer';
import ContactsContainer from '../containers/ContactsContainer';

export default withRouter(({ setCurrentUser, currentUser, history }) => {
  const PrivateRoute = ({component: Component, ...rest}) => (
    <Route {...rest} render={(props) => (
      currentUser
        ? <Component {...props} />
        : <Redirect to='/login' />
    )} />
  );

  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/login' render={() => <Login history={history} setCurrentUser={setCurrentUser} />} />
      <Route path='/register' component={Register} />
      <PrivateRoute path='/profile' component={ProfileContainer} />
      <PrivateRoute path='/contacts' component={ContactsContainer} />
    </Switch>
  );
});
