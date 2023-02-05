import Link from 'next/link'
import Image from 'next/image'

const Header = () => (
  <header className='fixed top-0 z-10 flex items-center justify-between w-full h-24 px-10 font-thin text-green-400 bg-gray-900'>
    <nav className='flex items-center justify-between w-full '>
      <div>
        <Image alt='' width={35} height={35} src='/favicon.ico'></Image>
      </div>

      <Link href='#home'>
        <button className='px-2 text-2xl tracking-tight hover:text-gray-500'>
          Home
        </button>
      </Link>
      <Link href='#technologies'>
        <button className='px-2 text-2xl tracking-tight hover:text-gray-500'>
          Technologies
        </button>
      </Link>
      <Link href='#projects'>
        <button className='px-2 text-2xl tracking-tight hover:text-gray-500'>
          Projects
        </button>
      </Link>
    </nav>
  </header>
)

export default Header
