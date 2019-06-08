import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {Provider} from 'mobx-react';

import stores from './stores';
import routes from './routes';

import DefaultLayout from './layout/DefaultLayout';

// 404 error page
import NotFound from './pages/NotFound';

import './styles/main.sass';

const App = () => {
  return (
    <Provider { ...stores }>
      <Router>
        <Switch>
          {routes.map((route, index) => <DefaultLayout key={index} {...route} />)}
          <Route component={NotFound} />
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
