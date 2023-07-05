import React, { lazy, Suspense } from 'react';

const LazyAziz = lazy(() => import('./Aziz'));

const Aziz = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyAziz {...props} />
  </Suspense>
);

export default Aziz;
