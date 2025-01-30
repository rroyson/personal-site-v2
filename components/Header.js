import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'

const Header = () => {
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    let timeoutId

    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY < 50) {
        setIsVisible(true)
        return
      }

      setIsVisible(lastScrollY > currentScrollY)

      clearTimeout(timeoutId)

      timeoutId = setTimeout(() => {
        setIsVisible(true)
      }, 1000)

      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
      clearTimeout(timeoutId)
    }
  }, [lastScrollY])

  return (
    <header
      className={`
        fixed top-0 left-0 w-full h-20
        transition-all duration-300 ease-in-out
        bg-gradient-to-r from-blue-900/20 via-purple-900/20 to-pink-900/20
        backdrop-blur-md border-b border-gray-800/30
        ${
          isVisible
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 -translate-y-full'
        }
      `}
    >
      <nav
        className='flex items-center justify-between h-full px-6 mx-auto max-w-7xl lg:px-8'
        aria-label='Main navigation'
      >
        <div className='flex-shrink-0'>
          <Link href='/'>
            <Image
              alt='Website logo'
              width={35}
              height={35}
              src='/favicon.ico'
              priority
            />
          </Link>
        </div>

        <div className='flex items-center px-2 py-1 space-x-1 rounded-lg bg-gradient-to-r from-blue-800/10 to-purple-900/10'>
          <Link className='nav-link' href='#home'>
            <span className='px-4 py-2 text-lg font-medium text-green-400 transition-colors hover:text-green-300'>
              Home
            </span>
          </Link>
          <Link className='nav-link' href='#technologies'>
            <span className='px-4 py-2 text-lg font-medium text-green-400 transition-colors hover:text-green-300'>
              Technologies
            </span>
          </Link>
          <Link className='nav-link' href='#projects'>
            <span className='px-4 py-2 text-lg font-medium text-green-400 transition-colors hover:text-green-300'>
              Projects
            </span>
          </Link>
        </div>
      </nav>
    </header>
  )
}

export default Header
