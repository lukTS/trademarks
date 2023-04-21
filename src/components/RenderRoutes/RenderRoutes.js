import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../../pages/Home';

const RenderRoutes = () => (
  <Switch>
    <Route exact path="/">
      <Home />
    </Route>
  </Switch>
);

export default RenderRoutes;
