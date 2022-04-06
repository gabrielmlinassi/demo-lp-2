import Image from 'next/image'

type BgImageProps = {
  backdrop?: boolean
  priority?: boolean
  src: string
}

/**
 * This image component will take the size of the parent component.
 * - Parent component must be set to relative;
 * - Control visibility of other layers with z-index;
 */
export const BgImage = (props: BgImageProps) => {
  const { backdrop = false, priority = false, src } = props
  return (
    <>
      {backdrop && (
        <div className="absolute inset-0 z-10 bg-black bg-opacity-50" />
      )}
      <Image src={src} layout="fill" objectFit="cover" priority={priority} />
    </>
  )
}
