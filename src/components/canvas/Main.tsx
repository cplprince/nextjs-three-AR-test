import { ZapparCamera, ImageTracker } from '@zappar/zappar-react-three-fiber'
import { useState } from 'react'
import Card from './Card'
import { NFTMarker } from './../test/index'

const Main = ({ ...props }) => {
  const [visible, setVisible] = useState(false)

  return (
    <>
      <NFTMarker url={'marker/pinball'}>
        <Card visible />
      </NFTMarker>
      {/* <ZapparCamera userCameraMirrorMode='none' rearCameraMirrorMode='none' /> */}
      {/* <ImageTracker
        onNotVisible={(anchor) => setVisible(false)}
        onNewAnchor={(anchor) => setVisible(true)}
        onVisible={(anchor) => setVisible(true)}
        targetImage={'/assets/BusinessCard.zpt'}>
        <Card visible={visible} />
      </ImageTracker> */}
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
