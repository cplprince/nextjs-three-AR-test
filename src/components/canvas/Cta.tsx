import { Text } from '@react-three/drei'

const Cta = ({ position, rotation }) => {
  return (
    <mesh>
      <Text color='white' position={position} rotation={rotation} fontSize={0.1} maxWidth={0.8} textAlign='center'>
        Tap on an icon to find out more!
      </Text>
    </mesh>
  )
}

export default Cta
