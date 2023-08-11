import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import logo from '../../public/maket.png'
import { FaHome } from 'react-icons/fa'
const links = [
    {
        id: 1,
        title: 'Series 1',
        href: '/series1',
        logo: '',
    },
    {
        id: 2,
        title: 'Series 2',
        href: '/series2',
        logo: '',
    },
    {
        id: 3,
        title: 'Other posts',
        href: '/other',
        logo: '',
    }
]

const Header = () => {
  return (
    <div className='bg-blue-400 z-10 fixed w-full'>
        <div className='flex flex-col'>
            <div className='px-4 py-4 flex flex-row'>
                <div className='flex flex-row items-center gap-x-2'>
                    <Link href='/' className='flex flex-row items-center gap-x-2'>
                        <Image 
                            src={logo} 
                            width={60} 
                            height={60} 
                            alt="Picture of the developer" 
                            className='rounded-full w-[60px] h-[60px]'
                        />
                        <p className='text-[36px]'>Kết Kết&apos;s Blog</p>
                    </Link>
                </div>
                <div className='flex flex-row ml-auto items-center py-2'>
                    Account
                </div>
            </div>
        </div>
        <div className='flex flex-row px-4 py-4 bg-blue-500'>
            <Link href='/' className='px-4 py-4 hover:bg-violet-600 rounded-md'>
                <FaHome className='text-[26px]'/>
            </Link>
            <div className='px-4 py-4'>
                {links.map((link) => (
                    <Link href={link.href} key={link.id} className='px-4 py-4 hover:bg-violet-600 rounded-md'>
                        {link.title}
                    </Link>
                ))} 
            </div>
        </div>
    </div>
    
    
  )
}

export default Header