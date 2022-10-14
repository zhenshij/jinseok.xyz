import { useRef } from 'react'
import { useRenderCanvas } from './useRenderCanvas'
import siteMetadata from '@/data/siteMetadata'

const WelcomeBoard = () => {
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
      <div className="relative z-10 flex h-[calc(100vh_-_166px)] items-center justify-center">
        <div className="cursor-default px-4 text-3xl md:text-4xl"></div>
      </div>
    </div>
  )
}

export default WelcomeBoard
