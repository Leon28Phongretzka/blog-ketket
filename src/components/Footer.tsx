import React from 'react'
import phanhon from '../../public/phanhon.jpg'
import Image from 'next/image'
const Footer = () => {
  return (
    <div className='flex flex-row items-center text-center justify-center'>
        <div className='rounded-md px-4'>
            <Image src={phanhon} alt="Phan Hon`" width={100} height={100} className='rounded-full w-[60px] h-[60px]' />
        </div>
        <p className='text-center justify-center'>
            Made by Die Zuverlassigkeit
        </p>
    </div>

  )
}

export default Footer