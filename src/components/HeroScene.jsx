import { Suspense, useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Edges, Float, Sparkles, Stars } from "@react-three/drei";

const LAYERS = [
  { y: -1, color: "#22d3ee", lines: [2.0, 1.2, 1.6] },
  { y: 0, color: "#7c5cff", lines: [1.4, 2.2, 0.9] },
  { y: 1, color: "#ff6b9d", lines: [1.8, 1.0, 2.0] },
];

function Layer({ y, color, lines }) {
  return (
    <group position={[0, y * 0.95, 0]}>
      <mesh>
        <boxGeometry args={[3.2, 0.14, 3.2]} />
        <meshPhysicalMaterial
          color={color}
          transparent
          opacity={0.28}
          roughness={0.15}
          metalness={0.4}
          emissive={color}
          emissiveIntensity={0.35}
        />
        <Edges color={color} />
      </mesh>
      {lines.map((w, i) => (
        <mesh key={i} position={[-1.4 + w / 2, 0.1, -0.9 + i * 0.9]}>
          <boxGeometry args={[w, 0.04, 0.16]} />
          <meshBasicMaterial color={color} />
        </mesh>
      ))}
    </group>
  );
}

function LayerStack() {
  const group = useRef();
  const core = useRef();

  useFrame((state, delta) => {
    if (group.current) {
      group.current.rotation.y += delta * 0.35;
      group.current.rotation.x = 0.45 + Math.sin(state.clock.elapsedTime * 0.6) * 0.06;
    }
    if (core.current) {
      core.current.rotation.x += delta * 0.8;
      core.current.rotation.y += delta * 1.1;
    }
  });

  return (
    <Float speed={1.4} rotationIntensity={0.2} floatIntensity={0.9}>
      <group position={[2.6, 0, 0]} scale={0.68}>
        <group ref={group}>
          {LAYERS.map((layer) => (
            <Layer key={layer.color} {...layer} />
          ))}
          <mesh ref={core}>
            <icosahedronGeometry args={[0.38, 1]} />
            <meshBasicMaterial color="#ffffff" wireframe />
          </mesh>
          <mesh>
            <sphereGeometry args={[0.2, 24, 24]} />
            <meshBasicMaterial color="#22d3ee" />
          </mesh>
          <pointLight color="#22d3ee" intensity={2} distance={6} />
        </group>
        <Orbiters />
      </group>
    </Float>
  );
}

function Orbiters() {
  const ring = useRef();
  useFrame((_, delta) => {
    if (ring.current) ring.current.rotation.z += delta * 0.5;
  });
  return (
    <group ref={ring} rotation={[Math.PI / 2.4, 0, 0]}>
      <mesh>
        <torusGeometry args={[3, 0.01, 16, 140]} />
        <meshBasicMaterial color="#22d3ee" transparent opacity={0.5} />
      </mesh>
      {[0, 2.1, 4.2].map((a, i) => (
        <mesh key={i} position={[Math.cos(a) * 3, Math.sin(a) * 3, 0]}>
          <sphereGeometry args={[0.09, 16, 16]} />
          <meshBasicMaterial color={["#ff6b9d", "#7c5cff", "#22d3ee"][i]} />
        </mesh>
      ))}
    </group>
  );
}

const SHAPES = [
  { pos: [-1.5, 2.4, -2], kind: "box", color: "#22d3ee", size: 0.7 },
  { pos: [0.8, -2.2, -1], kind: "octa", color: "#ff6b9d", size: 0.6 },
  { pos: [5.5, 2.8, -3], kind: "box", color: "#7c5cff", size: 0.9 },
  { pos: [-4, -1, -4], kind: "octa", color: "#7c5cff", size: 1 },
  { pos: [5.2, -2.8, -2], kind: "box", color: "#22d3ee", size: 0.5 },
  { pos: [-3, 3, -5], kind: "octa", color: "#22d3ee", size: 0.8 },
];

function WireShape({ pos, kind, color, size }) {
  const ref = useRef();
  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.x += delta * 0.3;
      ref.current.rotation.y += delta * 0.4;
    }
  });
  return (
    <Float speed={1.2} floatIntensity={1.5} rotationIntensity={0.4}>
      <mesh ref={ref} position={pos} scale={size}>
        {kind === "box" ? <boxGeometry args={[1, 1, 1]} /> : <octahedronGeometry args={[0.8]} />}
        <meshBasicMaterial color={color} wireframe transparent opacity={0.55} />
      </mesh>
    </Float>
  );
}

function GridFloor() {
  const grid = useRef();
  useFrame((_, delta) => {
    if (grid.current) grid.current.position.z = (grid.current.position.z + delta * 0.6) % 1;
  });
  return (
    <group position={[0, -3.2, -4]}>
      <gridHelper ref={grid} args={[60, 60, "#7c5cff", "#22d3ee"]} material-transparent material-opacity={0.25} />
    </group>
  );
}

function ParticleField() {
  const positions = useMemo(() => {
    const arr = new Float32Array(900 * 3);
    for (let i = 0; i < arr.length; i += 3) {
      arr[i] = (Math.random() - 0.5) * 24;
      arr[i + 1] = (Math.random() - 0.5) * 14;
      arr[i + 2] = (Math.random() - 0.5) * 14 - 3;
    }
    return arr;
  }, []);
  const ref = useRef();
  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.y += delta * 0.02;
  });
  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial color="#22d3ee" size={0.03} transparent opacity={0.7} sizeAttenuation />
    </points>
  );
}

function Rig() {
  useFrame((state) => {
    const { pointer, camera } = state;
    camera.position.x += (pointer.x * 0.9 - camera.position.x) * 0.04;
    camera.position.y += (pointer.y * 0.5 - camera.position.y) * 0.04;
    camera.lookAt(0, 0, 0);
  });
  return null;
}

export default function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 7], fov: 45 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true }}
      eventSource={document.body}
      eventPrefix="client"
    >
      <fog attach="fog" args={["#050507", 8, 24]} />
      <ambientLight intensity={0.6} />
      <directionalLight position={[3, 3, 3]} intensity={1.2} color="#ffffff" />
      <pointLight position={[-4, -2, -2]} intensity={0.8} color="#ff6b9d" />
      <pointLight position={[5, 3, 2]} intensity={0.6} color="#22d3ee" />

      <Suspense fallback={null}>
        <LayerStack />
        {SHAPES.map((s, i) => (
          <WireShape key={i} {...s} />
        ))}
        <GridFloor />
        <ParticleField />
        <Sparkles count={60} scale={8} size={2} speed={0.4} color="#22d3ee" />
        <Stars radius={60} depth={30} count={1200} factor={2} fade speed={0.5} />
        <Rig />
      </Suspense>
    </Canvas>
  );
}
