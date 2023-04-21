import React from 'react';
import RenderRoutes from './components/RenderRoutes';
import LinkToTop from './components/LinkToTop';
import routes from './routes';

function Main() {
  return (
    <div>
      <RenderRoutes routes={routes} />
      <LinkToTop />
    </div>
  );
}

export default Main;
