import React, { lazy, Suspense } from 'react';

const LazyAibek = lazy(() => import('./Aibek'));

const Aibek = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyAibek {...props} />
  </Suspense>
);

export default Aibek;
