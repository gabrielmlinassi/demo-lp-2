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
      className={clsx('inline-flex flex-grow items-end', className)}
    >
      <p className="font-bold text-[#F00B8F]">{children}</p>
    </a>
  )
}

export { ExternalLink }
