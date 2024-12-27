// pages/api/auth/[...nextauth].js

import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import connectDB from "@/app/lib/config/db"; // Koneksi MongoDB
import User from "@/app/lib/models/user"; // Model User

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
  ],
  callbacks: {
    async signIn({ user, profile }) {
      await connectDB();  // Koneksi ke MongoDB

      // Cek apakah user sudah ada berdasarkan Google ID
      const existingUser = await User.findOne({ googleId: profile.sub });
console.log(existingUser)
      if (!existingUser) {
        // Jika user belum ada, buat akun baru
        await User.create({
          name: user.name,
          email: user.email,
          image: user.image,
          googleId: profile.sub, 
          password: '12345678' // Simpan Google ID untuk referensi
        });
      }

      return true;
    },
    async session({ session, token }) {
      session.user.id = token.sub;  // Menyimpan ID pengguna di sesi
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.sub = user.googleId || user.id;  // Simpan ID Google atau ID pengguna
      }
      return token;
    },
  }, 
  secret: process.env.NEXTAUTH_SECRET,  // Secret untuk NextAuth
  pages: {
    error: '/auth/error',     // Halaman error kustom
    signIn: '/auth/login',    // Halaman login kustom
    newUser: '/auth/signup',  // Halaman signup untuk pengguna baru
  },
  
});

export { handler as GET, handler as POST };
