import Image from 'next/image'
import Link from 'next/link'

type ArtistProps = {
  picture: string
  name: string
  slug: string
  priority?: boolean
}

export const Artist = (props: ArtistProps) => {
  const { picture, name, slug, priority = false } = props
  return (
    <Link href={`/artists/${slug}`}>
      <div className="group relative h-[380px] w-full cursor-pointer overflow-hidden md:max-w-[calc(50%-12px)]">
        <div className="relative h-full w-full grayscale duration-300 group-hover:scale-110">
          <Image
            src={picture}
            priority={priority}
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="absolute bottom-10 w-10/12 max-w-[400px] bg-black bg-opacity-50 duration-200 hover:bg-opacity-75 lg:w-1/2">
          <span className="inline-block p-4 text-xl font-bold text-white">
            {name}
          </span>
        </div>
      </div>
    </Link>
  )
}
