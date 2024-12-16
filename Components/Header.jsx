import React from 'react'

const Header = () => {
    return (
        <div className='text-center my-8'>
            <h1 className='text-5xl sm:text-7xl font-medium mt-10'>SELAMAT DATANG DI 
                JURNALIGHT</h1>
            {/* Teks berjalan dari kanan ke kiri dengan animasi kelap-kelip */}
            <div className='mt-10 overflow-hidden'>
                <div className="marquee-container">
                    <marquee><p className='text-lg sm:text-2xl font-bold color-blink'>
                        Menyediakan berita yang aktual dan terpercaya serta pastinya terupdate
                    </p></marquee>
                </div>
            </div>
        </div>
    )
}

export default Header
