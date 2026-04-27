import { Canvas, useFrame } from '@react-three/fiber'
import { useRef, useMemo, Suspense } from 'react'
import * as THREE from 'three'

function VantaNet() {
  const pointsRef = useRef()
  const linesRef = useRef()
  const count = 60 // Number of particles (keep it low for performance and minimal look)
  
  // Initialize particles with random positions and velocities
  const particles = useMemo(() => {
    const temp = []
    for (let i = 0; i < count; i++) {
      temp.push({
        position: new THREE.Vector3(
          (Math.random() - 0.5) * 40,
          (Math.random() - 0.5) * 40,
          (Math.random() - 0.5) * 40
        ),
        velocity: new THREE.Vector3(
          (Math.random() - 0.5) * 0.05,
          (Math.random() - 0.5) * 0.05,
          (Math.random() - 0.5) * 0.05
        )
      })
    }
    return temp
  }, [])

  useFrame((state) => {
    const positions = new Float32Array(count * 3)
    const linePositions = []
    const mouse = {
      x: (state.mouse.x * 20),
      y: (state.mouse.y * 20)
    }

    particles.forEach((p, i) => {
      // Move particles
      p.position.add(p.velocity)

      // Boundary check
      if (Math.abs(p.position.x) > 25) p.velocity.x *= -1
      if (Math.abs(p.position.y) > 25) p.velocity.y *= -1
      if (Math.abs(p.position.z) > 25) p.velocity.z *= -1

      // Mouse attraction (subtle)
      const distToMouse = p.position.distanceTo(new THREE.Vector3(mouse.x, mouse.y, 0))
      if (distToMouse < 10) {
        p.position.lerp(new THREE.Vector3(mouse.x, mouse.y, 0), 0.01)
      }

      positions[i * 3] = p.position.x
      positions[i * 3 + 1] = p.position.y
      positions[i * 3 + 2] = p.position.z

      // Find neighbors for lines
      for (let j = i + 1; j < count; j++) {
        const dist = p.position.distanceTo(particles[j].position)
        if (dist < 8) {
          linePositions.push(p.position.x, p.position.y, p.position.z)
          linePositions.push(particles[j].position.x, particles[j].position.y, particles[j].position.z)
        }
      }
    })

    pointsRef.current.geometry.attributes.position.array = positions
    pointsRef.current.geometry.attributes.position.needsUpdate = true

    linesRef.current.geometry.setAttribute('position', new THREE.Float32BufferAttribute(linePositions, 3))
  })

  return (
    <group>
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute 
            attach="attributes-position" 
            count={count} 
            array={new Float32Array(count * 3)} 
            itemSize={3} 
          />
        </bufferGeometry>
        <pointsMaterial size={0.2} color="#1B4FFF" transparent opacity={0.6} sizeAttenuation />
      </points>
      
      <lineSegments ref={linesRef}>
        <bufferGeometry />
        <lineBasicMaterial color="#1B4FFF" transparent opacity={0.15} />
      </lineSegments>
    </group>
  )
}

export default function Background() {
  return (
    <div className="fixed inset-0 -z-50 overflow-hidden pointer-events-none bg-primary">
      <div className="absolute inset-0">
        <Canvas camera={{ position: [0, 0, 35], fov: 60 }}>
          <Suspense fallback={null}>
            <ambientLight intensity={0.5} />
            <VantaNet />
            <fog attach="fog" args={['#080e1a', 10, 80]} />
          </Suspense>
        </Canvas>
      </div>

      {/* Decorative radial glows to avoid "full blue" look */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-accent/5 blur-[120px] rounded-full" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-accent-light/5 blur-[120px] rounded-full" />
      
      {/* Noise Texture for premium feel */}
      <div className="absolute inset-0 opacity-[0.05] mix-blend-overlay" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} 
      />
    </div>
  )
}
