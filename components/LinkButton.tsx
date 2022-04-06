import clsx from 'clsx'
import Link from 'next/link'
import { FC } from 'react'

type LinkButtonProps = {
  href: string
  className?: string
}

export const LinkButton: FC<LinkButtonProps> = (props) => {
  const { children, href, className } = props
  return (
    <Link href={href}>
      <a
        href={href}
        className={clsx(
          'inline-flex rounded bg-[#f00b8f] px-12 py-3 font-bold text-white ring-white duration-200 hover:bg-[#be0973] focus:outline-none focus:ring-2',
          className
        )}
      >
        {children}
      </a>
    </Link>
  )
}
