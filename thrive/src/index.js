import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter, Router } from 'react-router-dom';

import { Provider as MobxProvider } from 'mobx-react';
import { RouterStore, syncHistoryWithStore } from 'mobx-react-router';


import { createBrowserHistory } from 'history';

import './index.css';
import { App } from './App'

const stores = {
  router: routingStore,
  // people: new PeopleStore('http://localhost:8080/api/v0'),
};

const browserHistory = createBrowserHistory();
const routingStore = new RouterStore();

const history = syncHistoryWithStore(browserHistory, routingStore);

ReactDOM.render(
  <MobxProvider {...stores}>
    <>
      <Router history={history}>
        <App />
      </Router>
    </>
  </MobxProvider>,
  document.getElementById('root'));
