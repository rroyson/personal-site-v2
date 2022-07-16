import Link from 'next/link'

function Nav() {
  return (
    <div className='text-xs text-white shadow bg-slate-400'>
      <ul className='flex justify-end p-4 '>
        <li className='px-4 hover:text-cyan-700'>
          <Link href='/'>
            <a>HOME</a>
          </Link>
        </li>
        <li className='px-4 hover:text-cyan-700'>
          <Link href='/technologies'>
            <a>TECHNOLOGIES</a>
          </Link>
        </li>
        <li className='px-4 hover:text-cyan-700'>
          <Link href='/projects'>
            <a>PROJECTS</a>
          </Link>
        </li>
      </ul>
    </div>
  )
}
export default Nav
