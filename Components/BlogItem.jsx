import { assets, blog_data } from '@/Assets/assets'
import Image from 'next/image' 
import Link from 'next/link'
import React from 'react'

const BlogItem = ({ title, description, category, image, id }) => {
    return (
        <div className='max-w-[360px] sm:max-w-[340px] bg-white border border-black transition-transform duration-300 hover:shadow-[-7px_7px_0px_#44403c] hover:-translate-y-2 mx-4'>
            <Link href={`/blogs/${id}`}>
                <Image src={image} alt='' width={420} height={420} className='border-b border-black' />
            </Link>
            <p className='ml-5 mt-5 px-1 inline-block bg-stone-700 text-white text-sm'>{category}</p>
            <div className='p-5'>
                <h5 className='mb-2 text-lg font-medium tracking-tight text-gray-900'>{title}</h5>
                <p className='mb-3 text-sm tracking-tight text-gray-700'>{description}</p>
                <Link href={`/blogs/${id}`} className='inline-flex items-center py-2 font-semibold text-center'>
                    Read More <Image src={assets.arrow} className='ml-2' alt='' width={12} />
                </Link>
            </div>
        </div>
    )
}

export default BlogItem
