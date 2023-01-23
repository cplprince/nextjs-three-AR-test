import { ZapparCamera, ImageTracker } from '@zappar/zappar-react-three-fiber'
import { useState } from 'react'
import Card from './Card'
import { Statue } from './Statue'

const Main = ({ ...props }) => {
  const [visible, setVisible] = useState(false)
  const [visibleStatue, setVisibleStatue] = useState(false)

  return (
    <>
      {/* <ZapparCamera userCameraMirrorMode='none' rearCameraMirrorMode='none' />
      <ImageTracker
        onNotVisible={(anchor) => setVisible(false)}
        onNewAnchor={(anchor) => setVisible(true)}
        onVisible={(anchor) => setVisible(true)}
        targetImage={'/assets/BusinessCard.zpt'}>
        <Card visible={visible} />
      </ImageTracker>
      <ImageTracker
        onNotVisible={(anchor) => setVisibleStatue(false)}
        onNewAnchor={(anchor) => setVisibleStatue(true)}
        onVisible={(anchor) => setVisibleStatue(true)}
        targetImage={'/assets/statue.zpt'}>
        <Statue visible={visibleStatue} />
      </ImageTracker> */}
    </>
  )
}

export default Main
