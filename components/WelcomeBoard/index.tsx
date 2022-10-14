import { useRef } from 'react'
import { useRenderCanvas } from './useRenderCanvas'
import { TypeAnimation } from 'react-type-animation'
import siteMetadata from '@/data/siteMetadata'

const WelcomeBoard = () => {
  const TypingComponent = () => {
    const arr: (string | number)[] = siteMetadata.text.welcome || []
    return (
      <TypeAnimation
        sequence={arr.length == 0 ? [] : arr.map((elem) => [elem, 3000]).flat()}
        wrapper="span"
        cursor={true}
        repeat={Infinity}
        style={{ fontSize: '4em' }}
      />
    )
  }
  const canvas = useRef<HTMLCanvasElement>()
  const parent = useRef<HTMLDivElement>()
  useRenderCanvas(canvas)

  return (
    <div ref={parent} className="pointer-events-none">
      <canvas
        ref={canvas}
        className="bg-skin-base pointer-events-auto absolute inset-0 h-full w-full"
        id="canvas"
      />
      <div className="relative z-10 flex h-[calc(100vh_-_88px)] cursor-default items-center justify-center">
        <TypingComponent />
      </div>
    </div>
  )
}

export default WelcomeBoard
