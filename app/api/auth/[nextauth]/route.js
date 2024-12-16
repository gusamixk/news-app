import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,      // Masukkan Client ID Google Anda
      clientSecret: process.env.GOOGLE_CLIENT_SECRET, // Masukkan Client Secret Google Anda
    }),
  ], 
  pages: {
    signIn: '/auth/login', // Halaman login kustom
    signOut: '/auth/login', // Halaman logout kustom
    error: '/auth/login',   // Halaman error kustom
  },
  session: {
    strategy: 'jwt', // Gunakan JWT untuk menyimpan sesi
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
