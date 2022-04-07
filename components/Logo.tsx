import Image from 'next/image'
import Link from 'next/link'

type LogoProps = {
  onBeforeRedirect?: () => void
}

const Logo = ({ onBeforeRedirect }: LogoProps) => {
  return (
    <Link href="/">
      <a
        onClick={onBeforeRedirect}
        className="relative h-16 w-32 cursor-pointer focus:outline-none md:h-24 md:w-44 md:px-20"
      >
        <Image src="/images/logo.png" layout="fill" objectFit="contain" />
      </a>
    </Link>
  )
}

export { Logo }
