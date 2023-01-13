import Scene from '@/components/canvas/Scene'
import { BrowserCompatibility } from '@zappar/zappar-react-three-fiber'
import dynamic from 'next/dynamic'

// Dynamic import is used to prevent a payload when the website starts, that includes threejs, r3f etc..
// WARNING ! errors might get obfuscated by using dynamic import.
// If something goes wrong go back to a static import to show the error.
// https://github.com/pmndrs/react-three-next/issues/49
// const Cta = dynamic(() => import('@/components/canvas/Cta'), { ssr: false })
// const Model = dynamic(() => import('@/components/canvas/Model'), { ssr: false })
// const Icons = dynamic(() => import('@/components/canvas/Icons'), { ssr: false })
// const Nametitle = dynamic(() => import('@/components/canvas/Nametitle'), { ssr: false })
const Main = dynamic(() => import('../components/canvas/Main'), { ssr: false })

// import Main from '../components/canvas/Main'

// Dom components go here
export default function Page(props) {
  // return <h1>Test</h1>
  return (
    <>
      {/* <BrowserCompatibility /> */}
      <h1>Test</h1>
    </>
  )
}

// Canvas components go here
// It will receive same props as the Page component (from getStaticProps, etc.)
Page.canvas = (props) => <Main scale={0.5} position-z={3} />

export async function getStaticProps() {
  return { props: { title: 'Index' } }
}
