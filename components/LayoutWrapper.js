// import { useState, useRef, useEffect } from 'react'
import headerNavLinks from '@/data/headerNavLinks'
import Link from './Link'
import SectionContainer from './SectionContainer'
import Footer from './Footer'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import Typewriter from 'typewriter-effect'
import siteMetadata from '@/data/siteMetadata'
import InstallApp from './InstallApp'

const LayoutWrapper = ({ children }) => {
  return (
    <SectionContainer>
      <div className="flex flex-col justify-between h-screen">
        <header className="flex items-center justify-between py-6">
          <div>
            <Link href="/" aria-label="techipedia">
              <div className="flex items-center justify-between text-xl font-semibold text-primary-color dark:text-primary-color-dark">
                <Typewriter
                  options={{
                    strings: `${siteMetadata.title}`,
                    autoStart: true,
                    loop: true,
                  }}
                />
              </div>
            </Link>
          </div>
          <div className="flex items-center text-base leading-5">
            <div className="hidden sm:block">
              {headerNavLinks.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className="p-1 font-medium text-gray-900 sm:p-4 dark:text-gray-100 hover:dark:text-primary-color-dark hover:text-primary-color"
                >
                  {link.title}
                </Link>
              ))}
            </div>
            <InstallApp />
            <ThemeSwitch />
            <MobileNav />
          </div>
        </header>
        <main className="relative mb-auto">{children}</main>
        <Footer />
      </div>
    </SectionContainer>
  )
}

export default LayoutWrapper
