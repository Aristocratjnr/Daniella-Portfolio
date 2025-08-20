'use client';

import * as THREE from 'three';
import { useFrame, RootState, Canvas } from '@react-three/fiber';
import { useRef, Suspense } from 'react';
import { Points, PointMaterial } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';

function Stars() {
  const ref = useRef<THREE.Points>(null);
  
  // Create a typed array with explicit type annotation
  const sphere = random.inSphere(new Float32Array(5000 * 3), { radius: 1.5 }) as Float32Array;
  
  useFrame((_state: RootState, delta: number) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} castShadow>
        <PointMaterial
          transparent
          color="#A58D84"
          size={0.003}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 opacity-30 pointer-events-none">
      <Canvas 
        camera={{ position: [0, 0, 1], fov: 75 }}
        gl={{ antialias: true, alpha: true }}
      >
        <Suspense fallback={null}>
          <Stars />
        </Suspense>
      </Canvas>
    </div>
  );
}
