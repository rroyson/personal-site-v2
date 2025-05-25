import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { Button } from './ui/button'

const Header = () => {
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [isDark, setIsDark] = useState(false)

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

  // Theme toggle functionality
  const toggleTheme = () => {
    const newTheme = !isDark
    setIsDark(newTheme)

    if (newTheme) {
      document.documentElement.setAttribute('data-theme', 'dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.removeAttribute('data-theme')
      localStorage.setItem('theme', 'light')
    }
  }

  // Load saved theme on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    const prefersDark = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches

    const shouldBeDark = savedTheme === 'dark' || (!savedTheme && prefersDark)

    if (shouldBeDark) {
      setIsDark(true)
      document.documentElement.setAttribute('data-theme', 'dark')
    }
  }, [])

  return (
    <header
      className={`
        fixed top-0 left-0 w-full z-50
        transition-all duration-500 ease-in-out
        bg-background/70 backdrop-blur-xl border-b border-border/30
        shadow-lg shadow-background/20
        ${
          isVisible
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 -translate-y-full'
        }
      `}
    >
      <nav
        className='container flex items-center justify-between h-20 py-4 mx-auto max-w-7xl'
        aria-label='Main navigation'
      >
        <div className='flex-shrink-0'>
          <Link href='/' className='flex items-center gap-3 group'>
            <div className='relative'>
              <div className='absolute transition-opacity duration-300 opacity-0 -inset-1 bg-gradient-to-r from-primary/30 to-emerald-500/30 rounded-xl blur group-hover:opacity-100'></div>
              <Image
                alt='Website logo'
                width={40}
                height={40}
                src='/favicon.ico'
                priority
                className='relative transition-all duration-300 border rounded-xl border-border/50 group-hover:border-primary/50'
              />
            </div>
            <span className='hidden text-xl font-bold transition-transform duration-300 md:inline-block text-gradient group-hover:scale-105'>
              Rob Royson
            </span>
          </Link>
        </div>

        <div className='flex items-center gap-2'>
          <Button
            asChild
            variant='ghost'
            className='transition-all duration-300 hover:bg-primary/10 hover:text-primary rounded-xl'
          >
            <Link href='/#home'>
              <span className='text-sm font-medium'>Home</span>
            </Link>
          </Button>
          <Button
            asChild
            variant='ghost'
            className='transition-all duration-300 hover:bg-primary/10 hover:text-primary rounded-xl'
          >
            <Link href='/#about'>
              <span className='text-sm font-medium'>About</span>
            </Link>
          </Button>
          <Button
            asChild
            variant='ghost'
            className='transition-all duration-300 hover:bg-primary/10 hover:text-primary rounded-xl'
          >
            <Link href='/#technologies'>
              <span className='text-sm font-medium'>Skills</span>
            </Link>
          </Button>
          <Button
            asChild
            variant='ghost'
            className='transition-all duration-300 hover:bg-primary/10 hover:text-primary rounded-xl'
          >
            <Link href='/#projects'>
              <span className='text-sm font-medium'>Projects</span>
            </Link>
          </Button>
          <Button
            asChild
            variant='ghost'
            className='transition-all duration-300 hover:bg-primary/10 hover:text-primary rounded-xl'
          >
            <Link href='/#contact'>
              <span className='text-sm font-medium'>Contact</span>
            </Link>
          </Button>
          <Button asChild className='ml-4 btn-outline-modern group'>
            <Link href='/resume' className='flex items-center gap-2'>
              <span className='text-sm font-medium'>Resume</span>
              <svg
                className='w-3 h-3 transition-transform group-hover:translate-x-0.5'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'
                />
              </svg>
            </Link>
          </Button>
          <Button
            variant='ghost'
            size='icon'
            onClick={toggleTheme}
            className='transition-all duration-300 hover:bg-primary/10 hover:text-primary rounded-xl'
            title={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
          >
            {isDark ? (
              <svg
                className='w-5 h-5'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z'
                />
              </svg>
            ) : (
              <svg
                className='w-5 h-5'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z'
                />
              </svg>
            )}
          </Button>
        </div>
      </nav>
    </header>
  )
}

export default Header
