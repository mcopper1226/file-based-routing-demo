import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Layout from './components/Layout';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
const queryClient = new QueryClient();

const routesCtx = require.context('./pages', true, /.tsx$/, 'lazy');

let loaderCache: Record<string, any> = {};
const loaders = require.context('./pages', true, /loader.ts$/);
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
    () => import(`./pages/${route.replace('./', '')}`)
  );

  console.log(typeof loader);

  return {
    path,
    id: path,
    element: (
      <React.Suspense>
        <Component />
      </React.Suspense>
    ),
    loader: loader && loader(queryClient)
  };
});

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: '<div>Error</div>',
    children: routes
  }
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
