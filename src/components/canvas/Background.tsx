import { useLoader } from '@react-three/fiber'
import { MutableRefObject, useRef } from 'react'
import * as THREE from 'three'

export const Background = ({ rotation }) => {
  const mesh: MutableRefObject<any> = useRef()
  const cardBgTexture = useLoader(THREE.TextureLoader, '/assets/BusinessCardPlain.png') as THREE.Texture

  return (
    <mesh ref={mesh} position={[0, 0, 0]} rotation={rotation}>
      <planeBufferGeometry args={[3, 2]} />
      <meshStandardMaterial attach='material' map={cardBgTexture} />
    </mesh>
  )
}
