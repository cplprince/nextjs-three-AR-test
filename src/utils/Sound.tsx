// @ts-nocheck

import * as THREE from 'three'

import zapLaserMp3 from './../../public/assets/zapsplat_laser.mp3'

export function Sound() {
  const listener = new THREE.AudioListener()
  const ZapLaser = new THREE.Audio(listener)

  const audioLoader = new THREE.AudioLoader()
  audioLoader.load(zapLaserMp3, (buffer) => {
    ZapLaser.setBuffer(buffer)
    ZapLaser.setLoop(false)
    ZapLaser.play()
  })
}
