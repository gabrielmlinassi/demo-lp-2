import { useEffect, useRef, useState } from 'react'
import { PlayIcon } from '@heroicons/react/solid'

type VideoProps = {
  src: string
  alt: string
}

export const Video = ({ src, alt }: VideoProps) => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setPlay] = useState(false)

  useEffect(() => {
    if (isPlaying) {
      videoRef.current?.play()
    } else {
      videoRef.current?.pause()
    }
  }, [isPlaying])

  return (
    <div>
      <div className="relative mt-8 inline-flex">
        <video ref={videoRef}>
          <source src={src} type="video/mp4" />
        </video>
        <div className="absolute top-1/2 left-1/2 z-10 m-0 h-14 w-14 -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full">
          {!isPlaying && (
            <PlayIcon
              onClick={() => setPlay(true)}
              className="h-full w-full cursor-pointer text-white duration-300 hover:scale-125"
            />
          )}
        </div>
        {isPlaying && (
          <div
            onClick={() => setPlay(false)}
            className="absolute inset-0 z-20"
          />
        )}
      </div>
      <div className="mt-3 font-bold">{alt}</div>
    </div>
  )
}
