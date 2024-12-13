import { blog_data } from '@/Assets/assets'
import React, { useState } from 'react'
import BlogItem from './BlogItem'

const BlogList = () => {
    <div className='text-center my-8'>
                <h1 className='text-5xl sm:text-7xl font-medium mt-10'>SELAMAT DATANG DI JURNALIGHT</h1>
                <p className='mt-10 max-w-[740px] m-auto text-xs sm:text-base'>Menyediakan berita yang aktual dan terpercaya serta pastinya terupdate</p>
            </div>

      const [menu, setMenu] = useState("All"); //jika kita mengeload web kita akan di kategori All
  return (
    <div>
        <div className='flex justify-center gap-6 my-10'>
            <button onClick={()=>setMenu('All')} className={menu==="All"?'bg-stone-700 text-white py-1 px-4 rounded-sm':""}>All</button>
            <button onClick={()=>setMenu('Technology')} className={menu==="Technology"?'bg-stone-700 text-white py-1 px-4 rounded-sm':""}>Technology</button>
            <button onClick={()=>setMenu('Politic')} className={menu==="Politic"?'bg-stone-700 text-white py-1 px-4 rounded-sm':""}>Politic</button>
            <button onClick={()=>setMenu('Lifestyle')} className={menu==="Lifestyle"?'bg-stone-700 text-white py-1 px-4 rounded-sm':""}>Lifestyle</button>
        </div>
        <div className='flex flex-wrap justify-around gap-1 gap-y-10 mb-16 xl:mx-24'>
            {blog_data.filter((item)=> menu==="All"?true:item.category==menu).map((item, index)=>{
                return <BlogItem key={index} id={item.id} image={item.image} title={item.title} description={item.description} category={item.category} />
            })}
        </div>
    </div>
  )
}

export default BlogList