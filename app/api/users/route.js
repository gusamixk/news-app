// pages/api/users/index.js
import UserModel from '../../lib/models/user'; // Ganti dengan model pengguna yang kamu miliki
import connectDB from '../../lib/config/db';
import { NextResponse } from 'next/server';
import User from '../../lib/models/user';

const LoadDB = async () => {
  await connectDB();
};

LoadDB();

// API untuk mengambil semua data pengguna
export async function GET() {
    try {
      const users = await User.find(); // Mengambil semua data pengguna
      return NextResponse.json({ users });
    } catch (error) {
      console.error(error);
      return NextResponse.json({ msg: 'Error fetching users' }, { status: 500 });
    }
  }