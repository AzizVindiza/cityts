import React, { lazy, Suspense } from 'react';

const LazyAzi = lazy(() => import('./Azi'));

const Azi = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyAzi {...props} />
  </Suspense>
);

export default Azi;
