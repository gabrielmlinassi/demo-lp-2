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
    <div className="group relative h-[380px] w-full overflow-hidden md:max-w-[calc(50%-12px)]">
      <div className="relative h-full w-full grayscale duration-300 group-hover:scale-110">
        <Image
          src={picture}
          priority={priority}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <Link href={`/artists/${slug}`}>
        <a className="absolute bottom-10 w-10/12 max-w-[400px] cursor-pointer bg-black bg-opacity-50 p-4 text-xl font-bold text-white duration-200 hover:bg-opacity-75 lg:w-1/2">
          {name}
        </a>
      </Link>
    </div>
  )
}
