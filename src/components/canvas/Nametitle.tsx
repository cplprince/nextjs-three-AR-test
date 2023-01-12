import { Text } from '@react-three/drei'

const Nametitle = () => {
  return (
    <group>
      <mesh>
        <Text color='white' position={[0.1, 0, 0.958]} rotation={[-1.5, 0, 0]} fontSize={0.13}>
          Francesca Ellis
        </Text>
        <Text color='white' position={[0.1, 0, 0.85]} rotation={[-1.5, 0, 0]} fontSize={0.1}>
          Junior Support Engineer
        </Text>
      </mesh>
    </group>
  )
}

export default Nametitle
