import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className="navbar bg-neutral text-neutral-content">
     <button className="btn btn-ghost text-xl">Jrincon</button>
     
     <ul className='flex flex-1 items-center justify-end gap-2 pr-4'>
        <li className='flex hover:bg-slate-100 hover:text-black rounded-md px-3 '><Link href={'/'}>inicio</Link></li>
        <li className='flex hover:bg-slate-100 hover:text-black rounded-md px-3 '><Link href={'/about'}>Abaut</Link></li>
        <li className='flex hover:bg-slate-100 hover:text-black rounded-md px-3 '><Link href={'/skills'}>Skills</Link></li>
        <li className='flex hover:bg-slate-100 hover:text-black rounded-md px-3 '><Link href={'/contact'}>Contact</Link></li>
     </ul>
     
   </nav>
  )
}

export default Navbar

