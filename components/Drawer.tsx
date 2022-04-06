import Link from 'next/link'
import { FC, Fragment } from 'react'
import { XIcon } from '@heroicons/react/outline'
import { Dialog, Transition } from '@headlessui/react'
import { Logo } from './Logo'

type DrawerProps = {
  isOpen: boolean
  onClose: () => void
}

const NavLink: FC<{ onClick: () => void; href: string }> = ({
  children,
  href,
  onClick,
}) => {
  return (
    <Link href={href}>
      <a onClick={onClick} className="text-3xl font-bold focus:outline-none">
        {children}
      </a>
    </Link>
  )
}

export const Drawer = ({ isOpen, onClose }: DrawerProps) => {
  return (
    <Transition
      as={Fragment}
      show={isOpen}
      enter="ease-out duration-300"
      enterFrom="-translate-x-full"
      enterTo="translate-x-0"
      leave="ease-in duration-200"
      leaveFrom="translate-x-0"
      leaveTo="-translate-x-full"
    >
      <Dialog onClose={onClose} className="fixed inset-0 z-20 bg-black">
        <div className="px-6">
          <div className="mt-8 flex items-center justify-between">
            <Logo onBeforeRedirect={onClose} />
            <XIcon onClick={onClose} className="h-7 w-7 text-white" />
          </div>
          <div className="mt-16 flex flex-col space-y-9 text-center text-white">
            <NavLink href="/about" onClick={onClose}>
              About
            </NavLink>
            <NavLink href="/artists" onClick={onClose}>
              Artists
            </NavLink>
            <NavLink href="/respect" onClick={onClose}>
              Respect
            </NavLink>
            <NavLink href="/shop" onClick={onClose}>
              Shop
            </NavLink>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}

export default Drawer
