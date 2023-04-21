import React from 'react';
import Home from './pages/Home';

const routes = [
  { path: '/', key: 'HOME', exact: true, component: () => <Home /> },
];

export default routes;
