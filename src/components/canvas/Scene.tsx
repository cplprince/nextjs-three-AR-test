import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload } from '@react-three/drei'
import { ResizeObserver } from '@juggle/resize-observer'
import { useEffect, useState } from 'react'

export default function Scene({ children, ...props }) {
  // Everything defined in here will persist between route changes, only children are swapped
  const [DPR, setDPR] = useState(null)

  useEffect(() => {
    setDPR(window.devicePixelRatio)
  }, [])

  return (
    <Canvas
      flat
      resize={{ polyfill: ResizeObserver }}
      linear
      dpr={DPR}
      id='zapparCanvas'
      {...props}
      gl={{ antialias: false, ...props.gl }}>
      <directionalLight intensity={0.75} />
      <ambientLight intensity={0.75} />
      {children}
      <Preload all />
      <OrbitControls />
    </Canvas>
  )
}
