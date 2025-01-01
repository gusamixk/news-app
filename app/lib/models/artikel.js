// app/lib/models/article.js

import mongoose from "mongoose";

const articleSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    default: "draft", // Default status
  },
}, { timestamps: true });

const Article = mongoose.models.Article || mongoose.model("Article", articleSchema);

export default Article;
