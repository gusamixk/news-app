// API route for individual article operations (api/artikel/[id]/route.js)
import { NextResponse } from 'next/server';
import connectDB from '../../../lib/config/db';
import Article from '../../../lib/models/artikel';

// Update an article by ID
export async function PUT(request, { params }) {
  try {
    await connectDB();
    const { id } = params; // Get ID from params
    const body = await request.json(); // Parse JSON body

    const updatedArticle = await Article.findByIdAndUpdate(id, body, { new: true });

    if (!updatedArticle) {
      return NextResponse.json({ success: false, message: 'Article not found' }, { status: 404 });
    }

    return NextResponse.json({ success: true, article: updatedArticle });
  } catch (error) {
    console.error('Error updating article:', error);
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
}

// Fetch an article by ID
export async function GET(request, { params }) {
  try {
    await connectDB();
    const { id } = params; // Get ID from params

    const article = await Article.findById(id);

    if (!article) {
      return NextResponse.json({ success: false, message: 'Article not found' }, { status: 404 });
    }

    return NextResponse.json({ success: true, article });
  } catch (error) {
    console.error('Error fetching article:', error);
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
}
