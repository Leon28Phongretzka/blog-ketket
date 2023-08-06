import React from 'react'
import Link from 'next/link'
import { HiArrowLeft } from 'react-icons/hi'
function StudioNavbar(props: any) {
    return (
        <div>
            <div className='flex flex-row'>
                <Link href="/" className='flex flex-row text-[26px] text-blue-400 p-5 border-blue-400 border-2 justify-center md:flex rounded-md hover:bg-blue-800 hover:text-white'>
                    <HiArrowLeft className='text-[30px] items-center justify-center mr-2 mt-1'/>
                    <p>Go To Home</p>
                </Link>
                <div className='flex flex-row ml-auto md:flex p-5 border-blue-400 border-2 justify-center rounded-md'>
                    <h1 className='mr-4 text-[26px]'>
                        My Portfolio
                    </h1>
                    <Link href='https://defensivetactics.tech/' className='text-blue-400 font-bold mr-4 text-[26px]'>
                        <p>Die Zuverklassigkeit</p>
                    </Link>
                </div>
            </div>
            <div>
                {props.renderDefault(props)}
            </div>
        </div>
    )
}

export default StudioNavbar