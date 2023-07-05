import React, { lazy, Suspense } from 'react';

const LazyFirstSection = lazy(() => import('./FirstSection'));

const FirstSection = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyFirstSection {...props} />
  </Suspense>
);

export default FirstSection;
