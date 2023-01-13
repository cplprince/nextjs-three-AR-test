import { Sound } from '@/utils/Sound'
import { useGLTF } from '@react-three/drei'

const Model = () => {
  const { nodes, materials } = useGLTF('/assets/ZapparLog.glb')
  // const { nodes, materials } = useGLTF('/assets/grabfigur.glb')
  // console.log(nodes, materials)

  return (
    <mesh>
      <mesh
        geometry={nodes.ZapparZLogo.geometry}
        material={materials.lambert3SG}
        dispose={null}
        position={[0.57, -0.05, 0]}
        scale={[2, 2, 2]}
        rotation={[0, 0, 0.01]}
        onClick={() => Sound()}
      />
    </mesh>
  )
}

export default Model
