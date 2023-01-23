import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload } from '@react-three/drei'
import { ResizeObserver } from '@juggle/resize-observer'
import { useEffect, useState } from 'react'
import { ARAnchor, ARView } from 'react-three-mind'

export default function Scene({ children, ...props }) {
  // Everything defined in here will persist between route changes, only children are swapped

  return (
    <ARView
      imageTargets='./assetstargets.mind'
      filterMinCF={1}
      filterBeta={10000}
      missTolerance={0}
      warmupTolerance={0}
      {...props}>
      <directionalLight intensity={0.75} />
      <ambientLight intensity={0.75} />
      {children}
      <Preload all />
      <OrbitControls />
    </ARView>
  )
}
