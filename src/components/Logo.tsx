import React from 'react'
import Image from 'next/image'
import logo from '../../public/phanhon.jpg'
function Logo(props: any) {
    const { renderDefault, title } = props;
    return (
        <div className='flex flex-row items-center'>
            <Image
                className='rounded-md shadow-md'
                width={64}
                height={64}
                alt='logo'
                src={logo}
            />
            <div className='md:hidden items-center'>
                {renderDefault(props)}
            </div>
        </div>
    )
}

export default Logo