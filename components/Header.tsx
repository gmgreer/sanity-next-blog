import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

type Props = {}

const Header = (props: Props) => {
  return (
    <header className='flex items-center justify-between space-x-2 font-bold px-10 py-5'>
        <div className='flex items-center space-x-2'>
            <Link href='/'>
                <Image 
                className='rounded-full'
                    src='/G.png'
                    width={50}
                    height={50}
                    alt='logo'
                />
            </Link>
            <h1>Garrett Greer</h1>
        </div>
        <div></div>
    </header>
  )
}

export default Header