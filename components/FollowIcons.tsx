import Link from 'next/link'
import {
  FacebookIcon,
  InstagramIcon,
  SpotifyIcon,
  TwitterIcon,
  YoutubeIcon,
} from './Icons'

type FollowIconsProps = {
  facebookUrl?: string
  twitterUrl?: string
  instagramUrl?: string
  spotifyUrl?: string
  youtubeUrl?: string
}

export const FollowIcons = (props: FollowIconsProps) => {
  return (
    <div className="inline-flex space-x-5">
      <Link href="">
        <a href="" className="cursor-pointer duration-200 hover:scale-125">
          <FacebookIcon />
        </a>
      </Link>
      <Link href="">
        <a href="" className="cursor-pointer duration-200 hover:scale-125">
          <TwitterIcon />
        </a>
      </Link>
      <Link href="">
        <a href="" className="cursor-pointer duration-200 hover:scale-125">
          <InstagramIcon />
        </a>
      </Link>
      <Link href="">
        <a href="" className="cursor-pointer duration-200 hover:scale-125">
          <SpotifyIcon />
        </a>
      </Link>
      <Link href="">
        <a href="" className="cursor-pointer duration-200 hover:scale-125">
          <YoutubeIcon />
        </a>
      </Link>
    </div>
  )
}
