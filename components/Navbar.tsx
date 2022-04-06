import dynamic from 'next/dynamic'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC, useState } from 'react'
import clsx from 'clsx'
import { MenuIcon } from '@heroicons/react/outline'
import { Logo } from './Logo'
const Drawer = dynamic(() => import('./Drawer'))

const NavLink: FC<{ href: string; active: boolean }> = (props) => {
  const { children, href, active } = props
  return (
    <Link href={href}>
      <a
        className={clsx(
          'hidden rounded py-1 px-3 text-lg font-bold text-white duration-100 hover:bg-[#F00B8F] md:inline-block',
          active && 'bg-[#f00b8f]'
        )}
      >
        {children}
      </a>
    </Link>
  )
}

type NavbarProps = {
  fixed: boolean
}

export const Navbar = ({ fixed }: NavbarProps) => {
  const router = useRouter()
  let [isOpen, setIsOpen] = useState(false)

  return (
    <div className={clsx('z-20 w-full px-6', fixed && 'absolute top-0 left-0')}>
      <div className="flex items-center justify-between pt-8 md:justify-center md:space-x-14">
        <NavLink href="/about" active={router.pathname.indexOf('about') > -1}>
          About
        </NavLink>
        <NavLink
          href="/artists"
          active={router.pathname.indexOf('artists') > -1}
        >
          Artists
        </NavLink>
        <Logo />
        <NavLink
          href="/respect"
          active={router.pathname.indexOf('respect') > -1}
        >
          Respect
        </NavLink>
        <NavLink href="/shop" active={router.pathname.indexOf('shop') > -1}>
          Shop
        </NavLink>
        <MenuIcon
          onClick={() => setIsOpen(true)}
          className="h-7 w-7 text-white md:hidden"
        />
      </div>
      <Drawer isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  )
}
