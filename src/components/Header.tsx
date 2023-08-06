import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import logo from '../../public/maket.png'

const links = [
    

]

const Header = () => {
  return (
    <div className='flex flex-col px-4 py-4'>
        <div className='px-4 py-4 flex flex-row'>
            <div className='flex flex-row items-center gap-x-2'>
                <Image 
                    src={logo} 
                    width={60} 
                    height={60} 
                    alt="Picture of the developer" 
                    className='rounded-full w-[60px] h-[60px]'
                />
                <p>Kết Kết's Blog</p>
            </div>
            <div className='flex flex-row ml-auto items-center py-2'>
                Account
            </div>
        </div>
        <div className=''>
            Something
        </div>
    </div>
    
  )
}

export default Header