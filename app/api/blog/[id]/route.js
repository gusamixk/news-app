import { NextResponse } from 'next/server';
import connectDB from '../../../lib/config/db';
import Blog from '../../../lib/models/BlogModel'; // Ensure correct model import

// Fetch the blog by ID
export async function GET(req, { params }) {
  const { id } = params;

  try {
    await connectDB();  // Connect to the database
    const blog = await Blog.findById(id);  // Find blog by ID

    if (!blog) {
      return NextResponse.json({ success: false, message: 'Blog not found' }, { status: 404 });
    }

    return NextResponse.json({ success: true, blog });  // Return the blog
  } catch (error) {
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
}

// Update the blog by ID
export async function PUT(req, { params }) {
  const { id } = params;
  const body = await req.json();  // Get request body for update

  try {
    await connectDB();  // Connect to the database
    const updatedBlog = await Blog.findByIdAndUpdate(id, body, { new: true });  // Update blog

    if (!updatedBlog) {
      return NextResponse.json({ success: false, message: 'Blog not found' }, { status: 404 });
    }

    return NextResponse.json({ success: true, blog: updatedBlog });  // Return updated blog
  } catch (error) {
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
}

// Delete the blog by ID
export async function DELETE(req, { params }) {
  const { id } = params;

  try {
    await connectDB();  // Connect to the database
    const deletedBlog = await Blog.findByIdAndDelete(id);  // Attempt to delete the blog

    if (!deletedBlog) {
      return NextResponse.json({ success: false, message: 'Blog not found' }, { status: 404 });
    }

    return NextResponse.json({ success: true, message: 'Blog deleted successfully' });  // Return success message
  } catch (error) {
    console.error('Error deleting blog:', error);
    return NextResponse.json({ success: false, message: 'Error deleting blog' }, { status: 500 });
  }
}
