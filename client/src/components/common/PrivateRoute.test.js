import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { PrivateRoute } from './PrivateRoute';
import Dashboard from '../dashboard/Dashboard';

it('PrivateRoute renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM
    .render(
      <Router>
        <Switch>
          <PrivateRoute 
              exact path="/dashboard"
              auth={{}} 
              component={ Dashboard }
          />
        </Switch>
      </Router>, div);
  ReactDOM.unmountComponentAtNode(div);
});
