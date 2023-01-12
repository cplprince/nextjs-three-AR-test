import { ZapparCamera, ImageTracker } from '@zappar/zappar-react-three-fiber'
import { useState } from 'react'
import Card from './Card'

const Main = ({ ...props }) => {
  const [visible, setVisible] = useState(false)

  return (
    <>
      <ZapparCamera userCameraMirrorMode='none' rearCameraMirrorMode='poses' />
      <ImageTracker
        onNotVisible={(anchor) => setVisible(false)}
        onNewAnchor={(anchor) => setVisible(true)}
        onVisible={(anchor) => setVisible(true)}
        targetImage={'/assets/BusinessCard.zpt'}>
        <Card visible={visible} />
      </ImageTracker>
      {/* <ImageTracker
        onNotVisible={(anchor) => setVisible(false)}
        onNewAnchor={(anchor) => setVisible(true)}
        onVisible={(anchor) => setVisible(true)}
        targetImage={'/assets/BusinessCard.zpt'}>
        <Card visible={visible} />
      </ImageTracker> */}
    </>
  )
}

export default Main
