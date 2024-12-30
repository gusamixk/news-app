import connectDB from "../../lib/config/db"; 
import BlogModel from "../../lib/models/BlogModel";
const { NextResponse } = require ("next/server"); 
import { writeFile } from "fs/promises";

const LoadDB = async () => {
  await connectDB(); 
};

LoadDB();

//API Endpoint to get all blogs
export async function GET(request) {
  const blogId = request.nextUrl.searchParams.get("id");
  if(blogId){
    const blog = await BlogModel.findById(blogId);
    return NextResponse.json(blog);
  }
  else{
     const blogs = await BlogModel.find({});
  return NextResponse.json({blogs});
  } 
}


// API Endpoint For Uploading Blogs
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
        title:`${formData.get('title')}`,
        description:`${formData.get('description')}`,
        category:`${formData.get('category')}`,
        author:`${formData.get('author')}`,
        image:`${imgUrl}`,
        authorImg:`${formData.get('authorImg')}`
    }

    await BlogModel.create(blogData);
    console.log("Blog Saved");

  return NextResponse.json({ success:true,msg:"Blog Added"});
}

//membuat api endpoint untuk mendelete blog
export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");

  // Validasi ID
  if (!id || !mongoose.Types.ObjectId.isValid(id)) {
    return NextResponse.json({ msg: "Invalid ID" }, { status: 400 });
  }

  const blog = await BlogModel.findById(id);

  if (!blog) {
    return NextResponse.json({ msg: "Blog not found" }, { status: 404 });
  }

  try {
    if (blog.image) {
      await fs.unlinkSync(`./public${blog.image}`);
      console.log("Image file deleted successfully");
    }
  } catch (error) {
    console.error("Error deleting file:", error);
  }

  await BlogModel.findByIdAndDelete(id);
  return NextResponse.json({ msg: "Blog Deleted" });
}

