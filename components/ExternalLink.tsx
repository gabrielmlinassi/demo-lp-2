import clsx from 'clsx'
import { FC } from 'react'

type ExternalLinkProps = {
  href: string
  className?: string
}

const ExternalLink: FC<ExternalLinkProps> = ({ children, href, className }) => {
  return (
    <a
      href={href}
      target="_blank"
      className={clsx(
        'inline-flex flex-grow items-end text-sm font-bold text-[#F00B8F] md:text-base',
        className
      )}
    >
      {children}
    </a>
  )
}

export { ExternalLink }
