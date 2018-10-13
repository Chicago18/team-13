import * as React from 'react';
import { matchPath, match as Match, withRouter, RouteComponentProps } from 'react-router';
import { Link, Route, Switch } from 'react-router-dom';
import { flatMap } from 'lodash-es';
import './App.css';

import { NavBar } from './components/navbar'
import { routes } from './routes'

export class App extends React.Component {
  render() {
    return (
      <>
        <NavBar />
          <main role="main" className="container">

          <Switch>
            {renderRoutes(routes)}
          </Switch>
        </main>
    </>
    );
  }
}

function renderRoutes(routes) {
  return flatMap(routes, (route, index) => {
    const rest = route.routes ? renderRoutes(route.routes) : [];
    return [
      <Route
        key={index}
        path={route.path}
        exact={route.exact}
        component={route.main} />,
      ...rest,
    ];
  });
}
