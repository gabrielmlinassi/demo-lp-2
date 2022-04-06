import { FC } from 'react'
import { FloatingSpeaker } from './FloatingSpeaker'
import { Footer } from './Footer'
import { Navbar } from './Navbar'

interface LayoutProps {
  navFixed?: boolean
  hideFooter?: boolean
}

export const Layout: FC<LayoutProps> = (props) => {
  const { children, navFixed = false, hideFooter = false } = props
  return (
    <div>
      <header>
        <Navbar fixed={navFixed} />
      </header>
      <main>{children}</main>
      <footer>{!hideFooter && <Footer />}</footer>
      <FloatingSpeaker />
    </div>
  )
}
