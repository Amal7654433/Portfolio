import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sparkles, Stars } from "@react-three/drei";

function DistortedBlob() {
  const mesh = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (mesh.current) {
      mesh.current.rotation.x = Math.sin(t / 4);
      mesh.current.rotation.y = t / 3;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.6} floatIntensity={1.2}>
      <mesh ref={mesh} position={[2.6, 0, 0]} scale={1.5}>
        <icosahedronGeometry args={[1, 8]} />
        <MeshDistortMaterial
          color="#7c5cff"
          attach="material"
          distort={0.45}
          speed={1.8}
          roughness={0.1}
          metalness={0.2}
          emissive="#3a1f8f"
          emissiveIntensity={0.4}
        />
      </mesh>
    </Float>
  );
}

function RingAccent() {
  const ring = useRef();
  useFrame((_, delta) => {
    if (ring.current) ring.current.rotation.z += delta * 0.15;
  });
  return (
    <mesh ref={ring} position={[2.6, 0, 0]} rotation={[Math.PI / 2.2, 0, 0]}>
      <torusGeometry args={[2.3, 0.012, 16, 120]} />
      <meshBasicMaterial color="#22d3ee" transparent opacity={0.5} />
    </mesh>
  );
}

export default function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 7], fov: 45 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.6} />
      <directionalLight position={[3, 3, 3]} intensity={1.2} color="#ffffff" />
      <pointLight position={[-4, -2, -2]} intensity={0.8} color="#ff6b9d" />

      <Suspense fallback={null}>
        <DistortedBlob />
        <RingAccent />
        <Sparkles count={60} scale={8} size={2} speed={0.4} color="#22d3ee" />
        <Stars radius={60} depth={30} count={1200} factor={2} fade speed={0.5} />
      </Suspense>
    </Canvas>
  );
}
