import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

import { Auth, Home } from './pages';

const App = (props) => {
  const { isAuth } = props;
  return (
    <div className="wrapper">
      <Route exact path={['/signin', '/signup', '/signup/verify']} component={Auth} />
      {/* <Route exact path="/im" component={Home} /> */}
      <Route
        exact
        path={['/', '/dialog/:id']}
        // render={() => (isAuth ? <Home /> : <Redirect to="/signin" />)}
        render={() => (isAuth ? <Home /> : <Home />)}
      />
    </div>
  );
};

export default connect(({ user }) => ({ isAuth: user.isAuth }))(App);
