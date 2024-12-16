import { assets } from '@/Assets/assets';
import Image from 'next/image';
import Link from 'next/link'; // Import Link from Next.js
import { useState, useEffect } from 'react'; // Import state dan effect dari React
import { useRouter } from 'next/navigation'; // Import useRouter untuk navigasi

const Navbar = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false); // State untuk cek status login
    const router = useRouter(); // Router untuk redirect setelah logout

    // Cek status login ketika komponen di-render
    useEffect(() => {
        const loginStatus = localStorage.getItem('isLoggedIn');
        if (loginStatus === 'true') {
            setIsLoggedIn(true);
        }
    }, []);

    // Fungsi untuk menangani logout
    const handleLogout = () => {
        localStorage.removeItem('isLoggedIn'); // Hapus status login dari localStorage
        setIsLoggedIn(false); // Set status login menjadi false
        router.push('/'); // Redirect ke halaman utama setelah logout
    };

    return (
        <div className='py-5 px-5 md:px-12 lg:px-28'>
            {/* Container for Logo, Navbar, and Log In / Log Out Button */}
            <div className='flex justify-between items-center'>
                {/* Logo */}
                <Image src={assets.logo} width={250} alt='Logo' className='w-[130px] sm:w-auto' />
                
                {/* Navbar Links */}
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

                {/* Conditionally Render Log In / Log Out Button */}
                {isLoggedIn ? (
                    <button
                        onClick={handleLogout}
                        className='flex items-center gap-2 font-medium py-1 sm:py-3 sm:px-6 border border-solid border-black shadow-[-7px_7px_0px_#44403c]'
                    >
                        Log Out <Image src={assets.arrow} alt="Log Out" />
                    </button>
                ) : (
                    <Link href="/auth/login" passHref>
            <button className='flex items-center gap-2 font-medium py-1 sm:py-3 sm:px-6 border border-solid border-black shadow-[-7px_7px_0px_#44403c]'>
             Log In <Image src={assets.arrow} alt="Log In" />
                </button>
                </Link>

                )}
            </div>
        </div>
    );
};

export default Navbar;
