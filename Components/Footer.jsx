import { assets } from '@/Assets/assets'
import Image from 'next/image'
import React from 'react'

const footer = () => {
  return (
    <div>
         <div className='flex justify-around flex-col gap-2 sm:gap-0 sm:flex-row bg-stone-700 py-5 items-center'>
            <Image src={assets.logo} alt='' width={70} />
            <form className='flex justify-between max-w-[500px] scale-75 sm:scale-100 mx-auto mt-10 border border-black shadow-[-7px_7px_0px_#000000]' action="">
                    <input type="email" placeholder='Enter Your Email' className='pl-4 outline-none'/>
                    <button type='submit' className='border-1 border-white py-4 px-4 sm:px-8 bg-white active:bg-red-600 active:text-white'>
                        Subscribe
                    </button>
                </form>
            <p className='text-sm text-white'>INI COPYRIGHTNYAAA</p>
    </div>
    </div>
  )
}

export default footer