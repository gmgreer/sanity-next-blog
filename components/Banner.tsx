import React from 'react'

type Props = {}

const Banner = (props: Props) => {
  return (
    <div className='flex py-10 flex-col lg:flex-row lg:space-x-5 justify-between font-bold px-10 mb-10'>
        <div>
            <h1 className='text-6xl'>Garrett's Blog</h1>
            <h2 className='mt-5 md:mt-0'>Welcome to my Blog page where I write about nothing important.</h2>
        </div>
        <p className='mt-5 md:mt-2 text-gray-700 max-w-sm'>
            My Coding Journey | My Writing Journey | My Life Journey
        </p>
    </div>
    )
}

export default Banner