'use client';

import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text3D, Center, Float } from '@react-three/drei';
import * as THREE from 'three';
import type { Group } from 'three';

export default function Chrome555() {
  const groupRef = useRef<Group>(null);

  // Chrome: medium gray base so highlights pop, NO ambient flood
  const chromeMaterial = useMemo(() => new THREE.MeshPhongMaterial({
    color: new THREE.Color('#787878'),
    specular: new THREE.Color('#ffffff'),
    shininess: 160,
  }), []);

  useFrame(({ clock }) => {
    if (!groupRef.current) return;
    const t = clock.getElapsedTime();
    groupRef.current.rotation.y = Math.sin(t * 0.3) * 0.15;
    groupRef.current.rotation.x = Math.sin(t * 0.18) * 0.04;
  });

  return (
    <>
      {/* Very low ambient — just enough to avoid full black shadows */}
      <ambientLight intensity={0.12} />

      {/* Key light — strong, top-right front */}
      <directionalLight position={[5, 7, 5]} intensity={6} color="#ffffff" />

      {/* Rim light — back top, creates bright edge on chrome */}
      <directionalLight position={[-3, 5, -6]} intensity={3} color="#ddeeff" />

      {/* Bottom bounce — subtle warm */}
      <directionalLight position={[0, -4, 3]} intensity={0.8} color="#bbbbcc" />

      {/* Side accent */}
      <pointLight position={[-6, 2, 2]} intensity={2} color="#ffffff" />

      <Float speed={1.2} rotationIntensity={0.06} floatIntensity={0.2}>
        <Center ref={groupRef}>
          <Text3D
            font="/fonts/helvetiker_bold.typeface.json"
            size={2.4}
            height={0.55}
            bevelEnabled
            bevelSize={0.05}
            bevelThickness={0.06}
            bevelSegments={10}
            curveSegments={32}
          >
            555
            <primitive object={chromeMaterial} attach="material" />
          </Text3D>
        </Center>
      </Float>
    </>
  );
}
