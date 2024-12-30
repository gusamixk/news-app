import mongoose from 'mongoose';

const articleSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ['pending', 'approved', 'rejected'],
    default: 'pending',
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Assuming you have a User model for user reference
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Article = mongoose.models.Article || mongoose.model('Article', articleSchema);

export default Article;
