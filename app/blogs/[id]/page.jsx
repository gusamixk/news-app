'use client';

import { assets, blog_data } from '@/Assets/assets';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import Footer from "@/Components/Footer";
import Link from 'next/link';
import { useParams } from 'next/navigation';
import axios from 'axios';

const Page = () => {
  const params = useParams(); // `useParams` sekarang menghasilkan Promise
  const [parameter, setParameter] = useState(null);
  const [data, setData] = useState(null);

  const fetchBlogData = async() =>{
    const response = await axios.get('/api/blog',{
      params:{
        id:params.id
      }
    })
    setData(response.data);
  }

  useEffect(() => {
      setParameter(params.id);
      fetchBlogData()
   [params]})
  

  if (!data) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <div className='bg-gray-200 py-5 px-5 md:px-12 lg:px-28'>
        <div className='flex justify-between items-center'>
          <Link href={'/'}>
            <Image src={assets.logo} width={250}alt='-' className='w-[130px] sm:w-auto' />
          </Link>
          <button className='flex items-center gap-2 font-medium py-1 px-3 sm:px-6 border border-black shadow-[-7px_7px_0px_#000000]'>
            Log In <Image src={assets.arrow} alt='' />
          </button>
        </div>
        <div className='text-center my-12'>
          <h1 className='text-2xl sm:text-5xl font-semibold max-w-[700px] mx-auto'>{data.title}</h1>
          <Image className='mx-auto mt-3 border border-white rounded-full' src={data.authorImg} width={60} height={60} alt='' />
          <p className='mt-1 pb-2 text-lg max-w-[740px] mx-auto'>{data.author}</p>
        </div>
        <div className='mx-5 max-w-[800px] md:mx-auto mt-[-50px] mb-10'>
          <Image className='border-4 border-black' src={data.image} width={1280} height={700} alt='' />
          <h1 className='my-8 text-[26px] font-semibold'>HOT NEWS</h1>
          <p> {data.description}</p>
          <div className='my-24'>
            <p className='text-green font font-semibold my-4'>SHARE NOW!!!</p>
            <div className='flex'>
              <Image src={assets.twitter_icon} width={50} alt='' />
              <Image src={assets.facebook_icon} width={50} alt='' />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Page;
