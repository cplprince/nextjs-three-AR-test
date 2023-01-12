import { useLoader } from '@react-three/fiber'
import * as THREE from 'three'

const Icons = () => {
  const webIconTexture = useLoader(THREE.TextureLoader, '/assets/WebLaunch.png') as THREE.Texture
  const facebookIconTexture = useLoader(THREE.TextureLoader, '/assets/Facebook.png') as THREE.Texture
  const phoneIconTexture = useLoader(THREE.TextureLoader, '/assets/Phone.png') as THREE.Texture

  return (
    <group>
      <mesh position={[-1.2, 0.1, -0.71875]} rotation={[-1.5, 0, 0]} onClick={() => window.open('https://zap.works')}>
        <planeBufferGeometry args={[0.38, 0.38]} />
        <meshBasicMaterial attach='material' map={webIconTexture} color='white' transparent />
      </mesh>
      <mesh position={[-0.75, 0.1, -0.71875]} rotation={[-1.5, 0, 0]} onClick={() => window.open('https://zap.works')}>
        <planeBufferGeometry args={[0.38, 0.38]} />
        <meshBasicMaterial attach='material' map={facebookIconTexture} color='white' transparent />
      </mesh>
      <mesh position={[-0.3, 0.1, -0.71875]} rotation={[-1.5, 0, 0]} onClick={() => window.open('tel:123-456-7890123')}>
        <planeBufferGeometry args={[0.38, 0.38]} />
        <meshBasicMaterial attach='material' map={phoneIconTexture} color='white' transparent />
      </mesh>
    </group>
  )
}

export default Icons
