import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload } from '@react-three/drei'
import { ARCanvas } from '../test/index'

export default function Scene({ children, ...props }) {
  // Everything defined in here will persist between route changes, only children are swapped
  return (
    <ARCanvas
      interpolationFactor={24}
      camera={{ far: 2000 }}
      onCreated={({ gl }) => {
        gl.setPixelRatio(Math.min(window.devicePixelRatio, 2))
        gl.setSize(window.innerWidth, window.innerHeight)
      }}>
      <directionalLight intensity={0.75} />
      <ambientLight intensity={0.75} />
      {children}
      <Preload all />
      <OrbitControls />
    </ARCanvas>
  )
}
