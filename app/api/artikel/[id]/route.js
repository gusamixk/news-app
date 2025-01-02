import { NextResponse } from 'next/server';
import connectDB from '../../../lib/config/db';
import Article from '../../../lib/models/artikel';

export async function PUT(request, { params }) {
  try {
    await connectDB();
    const { id } = params;
    const body = await request.json();
    
    const updatedArticle = await Article.findByIdAndUpdate(id, body, { new: true });
    
    if (!updatedArticle) {
      return NextResponse.json({ success: false, message: 'Article not found' }, { status: 404 });
    }

    return NextResponse.json({ success: true, article: updatedArticle });
  } catch (error) {
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
}