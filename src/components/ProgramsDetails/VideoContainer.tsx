import { useState, useRef } from "react"
import { RotateCcw } from "lucide-react" 

interface VideoProps {
  videoUrl?: string
}

function VideoContainer({ videoUrl }: VideoProps) {
  const [isVisible, setIsVisible] = useState(true)
  const [isEnded, setIsEnded] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const handleClose = () => setIsVisible(false)
  const handleOpen = () => {
    setIsVisible(true)
    setIsEnded(false)
  }

  const handleReplay = () => {
    const video = videoRef.current
    if (video) {
      video.currentTime = 0
      video.play()
      setIsEnded(false)
    }
  }

  const handleEnded = () => setIsEnded(true)

  if (!videoUrl) {
    return <div className="text-center text-white">No hay ningún video disponible.</div>
  }

  return (
    <div className="mx-auto mb-8 w-full max-w-6xl text-center">
      {!isVisible ? (
        <button
          onClick={handleOpen}
          className="mb-4 rounded-full bg-white/10 px-4 py-2 text-sm text-white transition-colors hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/50"
          type="button"
        >
          Volver a mostrar video
        </button>
      ) : (
        <div className="relative overflow-hidden rounded-2xl border border-white/20 shadow-2xl">
          <button
            onClick={handleClose}
            className="absolute right-2 top-2 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-black/60 text-white transition-colors hover:bg-black/80 focus:outline-none focus:ring-2 focus:ring-white/50"
            aria-label="Cerrar video"
            type="button"
          >
            ✕
          </button>

          <video
            ref={videoRef}
            className="h-full w-full aspect-video"
            src={videoUrl}
            autoPlay
            muted
            preload="metadata"
            onEnded={handleEnded}
            controls
          />

          {isEnded && (
            <button
              onClick={handleReplay}
              className="absolute left-1/2 top-1/2 z-10 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-black/60 text-white hover:bg-black/80 transition focus:outline-none focus:ring-2 focus:ring-white/50"
              aria-label="Repetir video"
              type="button"
            >
              <RotateCcw className="h-8 w-8" />
            </button>
          )}
        </div>
      )}
    </div>
  )
}

export default VideoContainer
