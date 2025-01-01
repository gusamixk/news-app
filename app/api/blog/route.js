import connectDB from "../../lib/config/db"; 
import BlogModel from "../../lib/models/BlogModel";
const { NextResponse } = require("next/server"); 
import { writeFile } from "fs/promises";
import mongoose from "mongoose";
import { unlink } from "fs";

const LoadDB = async () => {
  await connectDB(); 
};

LoadDB();

// API Endpoint to get all blogs (filter by status)
export async function GET(request) {
  const blogId = request.nextUrl.searchParams.get("id");
  const status = request.nextUrl.searchParams.get("status");  // Added filter for status

  if (blogId) {
    const blog = await BlogModel.findById(blogId);
    return NextResponse.json(blog);
  } else {
    let blogs;
    if (status) {
      // Filter blogs by status (pending, approved, rejected)
      blogs = await BlogModel.find({ status: status });
    } else {
      blogs = await BlogModel.find({});
    }
    return NextResponse.json({ blogs });
  }
}

// API Endpoint for uploading blogs
export async function POST(request) {
  const formData = await request.formData();
  const timestamp = Date.now();
 
  const image = formData.get('image');
  const imageByteData = await image.arrayBuffer();
  const buffer = Buffer.from(imageByteData);
  const path = `./public/${timestamp}_${image.name}`;
  await writeFile(path, buffer);
  const imgUrl = `/${timestamp}_${image.name}`;
  
  const blogData = {
    title: `${formData.get('title')}`,
    description: `${formData.get('description')}`,
    category: `${formData.get('category')}`,
    author: `${formData.get('author')}`,
    image: `${imgUrl}`,
    authorImg: `${formData.get('authorImg')}`,
    status: 'pending',  // Default status is 'pending'
    submittedBy: 'user'  // Indicating the article is submitted by user
  };

  await BlogModel.create(blogData);
  console.log("Blog Saved");

  return NextResponse.json({ success: true, msg: "Blog Added" });
}

// API Endpoint to update the status of a blog (approve/reject)
export async function PUT(request) {
  const blogId = request.nextUrl.searchParams.get("id");
  const status = request.nextUrl.searchParams.get("status");  // status should be 'approved' or 'rejected'

  if (!blogId || !status || !['approved', 'rejected'].includes(status)) {
    return NextResponse.json({ msg: "Invalid request" }, { status: 400 });
  }

  const blog = await BlogModel.findById(blogId);
  if (!blog) {
    return NextResponse.json({ msg: "Blog not found" }, { status: 404 });
  }

  // Update the blog's status
  blog.status = status;
  await blog.save();

  return NextResponse.json({ msg: `Blog ${status}` });
}

// API Endpoint to delete a blog
export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");

  if (!id || !mongoose.Types.ObjectId.isValid(id)) {
    return NextResponse.json({ msg: "Invalid ID" }, { status: 400 });
  }

  const blog = await BlogModel.findById(id);

  if (!blog) {
    return NextResponse.json({ msg: "Blog not found" }, { status: 404 });
  }

  try {
    if (blog.image) {
      await unlink(`./public${blog.image}`);
      console.log("Image file deleted successfully");
    }
  } catch (error) {
    console.error("Error deleting image file:", error);
  }

  await BlogModel.findByIdAndDelete(id);
  return NextResponse.json({ msg: "Blog Deleted" });
}
