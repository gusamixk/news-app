import { assets } from '@/Assets/assets'
import Image from 'next/image'
import Link from 'next/link' // Import Link from Next.js
import React from 'react'

const Header = () => {
    return (
        <div className='text-center my-8'>
        <h1 className='text-5xl sm:text-7xl font-medium mt-10'>SELAMAT DATANG DI 
            JURNALIGHT</h1>
        <p className='mt-10 max-w-[740px] m-auto text-xs sm:text-base'>Menyediakan berita yang aktual dan terpercaya serta pastinya terupdate</p>
    </div>
    )
}

export default Header
