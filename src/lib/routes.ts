import React from 'react';
const routesCtx = require.context('../pages', true, /.tsx$/, 'lazy');

let loaderCache: Record<string, any> = {};
const loaders = require.context('../pages', true, /loader.ts$/);
loaders.keys().forEach((key) => {
  loaderCache[key.replace(/\/([A-Za-z0-9])\w+\.loader\.ts$/g, '/index.tsx')] =
    loaders(key);
});

const routes = routesCtx.keys().map((route) => {
  // @TODO: Investigate what type we're actually dealing with [lines 13 and 17.]
  // @ts-ignore
  const loader = loaderCache[route]?.default;
  const path = route
    .replace(/\/src\/pages|index|\.tsx$/g, '')
    .replace(/^./g, '')
    .replace(/\[\.{3}.+\]/, '*')
    .replace(/\[(.+)\]/, ':$1');

  const Component = React.lazy(
    () => import(`../pages/${route.replace('./', '')}`)
  );

  return {
    path,
    Component,
    loader
  };
});

export default routes;
