'use client';

import * as THREE from 'three';
import { useFrame, RootState, Canvas } from '@react-three/fiber';
import { useRef, Suspense, useMemo } from 'react';
import { Points, PointMaterial } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';

type StarsProps = {
  color?: string;
  size?: number;
  radius?: number;
  count?: number;
  speed?: { x: number; y: number };
  initialRotationZ?: number;
};

function Stars({
  color = '#A58D84',
  size = 0.003,
  radius = 1.5,
  count = 5000,
  speed = { x: 1, y: 1.5 },
  initialRotationZ = Math.PI / 4,
}: StarsProps) {
  const pointsRef = useRef<THREE.Points>(null);
  const groupRef = useRef<THREE.Group>(null);

  // Memoize particle positions to avoid reallocation on re-renders
  const positions = useMemo(() => {
    return random.inSphere(new Float32Array(count * 3), { radius }) as Float32Array;
  }, [count, radius]);

  useFrame((_state: RootState, delta: number) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.x -= (delta / 10) * speed.x;
      pointsRef.current.rotation.y -= (delta / 15) * speed.y;
    }
    if (groupRef.current) {
      // Subtle breathing scale for a living feel
      const t = performance.now() / 1000;
      const s = 1 + Math.sin(t * 0.3) * 0.02;
      groupRef.current.scale.set(s, s, s);
    }
  });

  return (
    <group ref={groupRef} rotation={[0, 0, initialRotationZ]}>
      <Points ref={pointsRef} positions={positions} stride={3} frustumCulled={false} castShadow>
        <PointMaterial
          transparent
          color={color}
          size={size}
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
          {/* Near layer: smaller radius, slower rotation */}
          <Stars color="#B9A79F" size={0.0026} radius={1.2} count={3800} speed={{ x: 0.7, y: 1.0 }} initialRotationZ={Math.PI / 6} />
          {/* Far layer: larger radius, faster rotation and slightly dimmer color */}
          <Stars color="#8E6F64" size={0.0032} radius={2.0} count={6200} speed={{ x: 1.2, y: 1.8 }} initialRotationZ={Math.PI / 3} />
        </Suspense>
      </Canvas>
    </div>
  );
}

