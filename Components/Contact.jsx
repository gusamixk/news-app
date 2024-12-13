import { assets } from '@/Assets/assets'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ContactUs = () => {
    return (
        <div className='py-3 px-5 md:px-12 lg:px-28'>
            {/* Contact Us Section */}
            <div className='text-center my-4'>
                <h1 className='text-5xl sm:text-7xl font-medium mt-4'>Hubungi Kami</h1>
                <p className='mt-4 max-w-[740px] m-auto text-xs sm:text-base'>
                    Kami senang mendengar dari Anda! Isi formulir di bawah ini atau hubungi kami melalui email.
                </p>
            </div>

            {/* Contact Form */}
            <div className='max-w-4xl mx-auto'>
                <form className='bg-white shadow-lg p-8 rounded-lg'>
                    <div className='flex flex-col gap-6'>
                        <div className='flex flex-col'>
                            <label htmlFor='name' className='text-sm font-medium text-gray-700'>Nama</label>
                            <input 
                                id='name' 
                                type='text' 
                                className='mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:border-stone-700' 
                                placeholder='Nama Anda'
                            />
                        </div>
                        
                        <div className='flex flex-col'>
                            <label htmlFor='email' className='text-sm font-medium text-gray-700'>Email</label>
                            <input 
                                id='email' 
                                type='email' 
                                className='mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:border-stone-700' 
                                placeholder='Email Anda'
                            />
                        </div>
                        
                        <div className='flex flex-col'>
                            <label htmlFor='message' className='text-sm font-medium text-gray-700'>Pesan</label>
                            <textarea 
                                id='message' 
                                rows='6' 
                                className='mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:border-stone-700' 
                                placeholder='Tulis pesan Anda di sini...'
                            />
                        </div>
                    </div>

                    <button type='submit' className='mt-6 py-3 px-6 bg-stone-700 text-white font-medium rounded-md shadow-md hover:bg-stone-600'>
                        Kirim Pesan
                    </button>
                </form>
            </div>
        </div>
    )
}

export default ContactUs
