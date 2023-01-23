import { Background } from './Background'
import Icons from './Icons'
import Nametitle from './Nametitle'
import Cta from './Cta'
import Model from './Model'
import Grid from './Grid'

interface Props {
  visible?: boolean
}

const Card = ({ visible }: Props) => {
  return (
    <group visible={visible || true} position={[0, 0, 0]} rotation={[1.5, 0, 0]} scale={0.3}>
      <Background rotation={[-1.5, 0, 0]} />
      <Icons />
      <Nametitle />
      <Cta position={[-0.86, 0, 0.1]} rotation={[-1.5, 0, 0]} />
      <Model />
    </group>
  )
}

export default Card
