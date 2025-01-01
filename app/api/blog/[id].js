// pages/api/blog/[id].js

import connectDB from '../../lib/config/db';
import BlogModel from '@/app/lib/models/BlogModel';  // Sesuaikan dengan model blog yang kamu pakai

export default async function handler(req, res) {
  const { method } = req;
  const { id } = req.query;

  await connectDB();

  switch (method) {
    case 'DELETE':
      try {
        const deletedBlog = await BlogModel.findByIdAndDelete(id);

        if (!deletedBlog) {
          return res.status(404).json({ msg: 'Blog not found' });
        }

        return res.status(200).json({ msg: 'Blog deleted successfully' });
      } catch (error) {
        console.error('Error deleting blog:', error);
        return res.status(500).json({ msg: 'Internal Server Error' });
      }
    default:
      return res.status(405).json({ msg: 'Method not allowed' });
  }
}
