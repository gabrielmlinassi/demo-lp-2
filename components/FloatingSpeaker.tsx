import { SpeakerIcon } from './Icons'

export const FloatingSpeaker = () => {
  return (
    <div className="fixed right-6 bottom-6 z-30 w-full md:right-12 md:bottom-12">
      <div className="ml-auto h-12 w-12 rounded-full bg-white p-[2px]">
        <div className="flex h-full w-full items-center justify-center rounded-full bg-[#F00B8F]">
          <SpeakerIcon />
        </div>
      </div>
    </div>
  )
}
