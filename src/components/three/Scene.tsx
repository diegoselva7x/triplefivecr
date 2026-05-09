'use client';

import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import Chrome555 from './Chrome555';

function Fallback() {
  return null;
}

export default function Scene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 7], fov: 62 }}
      gl={{ antialias: true, alpha: true }}
      style={{ background: 'transparent' }}
      dpr={[1, 2]}
    >
      <Suspense fallback={<Fallback />}>
        <Chrome555 />
      </Suspense>
    </Canvas>
  );
}
