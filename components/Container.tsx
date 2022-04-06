import clsx from 'clsx'
import { FC } from 'react'

type ContainerProps = {
  className?: string
}

export const Container: FC<ContainerProps> = ({ children, className }) => {
  return (
    <section
      className={clsx(
        'relative mx-auto max-w-[1536px] px-6 md:px-16',
        className
      )}
    >
      {children}
    </section>
  )
}
