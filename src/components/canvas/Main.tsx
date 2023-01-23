import { ZapparCamera, ImageTracker } from '@zappar/zappar-react-three-fiber'
import { useState } from 'react'
import Card from './Card'
import { Statue } from './Statue'
import { ARAnchor, ARView } from 'react-three-mind'
import { Preload, OrbitControls } from '@react-three/drei'

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

      <ARView
        imageTargets='./assets/BusinessCard.mind'
        filterMinCF={0.1}
        filterBeta={1000}
        missTolerance={1}
        warmupTolerance={0}
        maxTrack={2}
        {...props}>
        <directionalLight intensity={0.75} />
        <ambientLight intensity={0.75} />
        <ARAnchor target={0}>
          <Card />
        </ARAnchor>
        <ARAnchor target={1}>
          <Statue />
        </ARAnchor>
        <Preload all />
        <OrbitControls />
      </ARView>
    </>
  )
}

export default Main
