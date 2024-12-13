import { assets } from '@/Assets/assets'
import Image from 'next/image'
import Link from 'next/link' // Import Link from Next.js
import React from 'react'

const Navbar = () => {
    return (
        <div className='py-5 px-5 md:px-12 lg:px-28'>
            {/* Container for Logo, Navbar, and Log In Button */}
            <div className='flex justify-between items-center'>
                {/* Logo */}
                <Image src={assets.logo} width={70} alt='' className='w-[130px] sm:w-auto' />
                
                {/* Navbar */}
                <div className='flex justify-center gap-6 flex-grow'>
                    <Link href="/" passHref>
                        <button className='text-sm font-medium py-2 px-6 border-b-2 border-transparent hover:border-stone-700'>
                            Home
                        </button>
                    </Link>
                    <Link href="/contact" passHref>
                        <button className='text-sm font-medium py-2 px-6 border-b-2 border-transparent hover:border-stone-700'>
                            Contact Us
                        </button>
                    </Link>
                    <Link href="/membership" passHref>
                        <button className='text-sm font-medium py-2 px-6 border-b-2 border-transparent hover:border-stone-700'>
                            Membership
                        </button>
                    </Link>
                </div>

                {/* Log In Button as a Link */}
                <Link href="/login" passHref>
                    <button className='flex items-center gap-2 font-medium py-1 sm:py-3 sm:px-6 border border-solid border-black shadow-[-7px_7px_0px_#44403c]'>
                        Log In <Image src={assets.arrow} alt='' />
                    </button>
                </Link>
            </div>

            {/* Welcome Text */}
          
        </div>
    )
}

export default Navbar
